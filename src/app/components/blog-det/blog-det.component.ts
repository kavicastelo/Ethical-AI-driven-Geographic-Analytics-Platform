import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {blogDataStore} from "../../shared/store/blog-data-store";
import {ThemeService} from "../../services/theme.service";
import {filter, Subscription} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {commentDataStore} from "../../shared/store/comment-data-store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogService} from "../../services/blog.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../services/auth.service";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-blog-det',
  templateUrl: './blog-det.component.html',
  styleUrls: ['./blog-det.component.scss']
})
export class BlogDetComponent implements OnInit, OnDestroy {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;
  isReplyFormVisible: boolean = false;

  blogId: string | null | undefined;
  blogData: any;
  commentData: any = commentDataStore;
  sortedComments: any = [];

  userProfile: any = [
    {
      name: '',
      family_name: '',
      email: '',
      picture: 'https://img.icons8.com/plumpy/24/user-male-circle.png',
    }
  ];

  replyForm = new FormGroup({
    reply: new FormControl(null, [
      Validators.required
    ])
  });
  commentForm = new FormGroup({
    comment: new FormControl(null, [
      Validators.required
    ])
  })

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private blogService: BlogService,
    private commentService: CommentService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private cookieService: AuthService) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Reload the page when the route changes
        window.location.reload();
        window.scrollTo(0, 0);
      });

    if (!this.cookieService.isUserProfileName()) {
      this.router.navigate(['/authorize']);
    }

    this.loadBlog();

    this.userProfile.name = this.cookieService.profileName();
    this.userProfile.family_name = this.cookieService.profileFamilyName();
    this.userProfile.email = this.cookieService.profileEmail();
    this.userProfile.picture = this.cookieService.profilePicture();
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  loadBlog() {
    this.blogService.getAllBlogs().subscribe((blogs: any) => {
      this.blogData = blogs;
      this.route.paramMap.subscribe(params => {
        this.blogId = params.get('id');
        this.blogData.forEach((blog: any) => {
          if (blog.id == this.blogId) {
            this.blogData = blog;
          }
        })

        this.commentService.getAllComments().subscribe((comments: any) => {
          this.commentData = comments;

          this.commentData.forEach((comment: any) => {
            if (comment.blogId == this.blogId) {
              this.sortedComments.push(comment);
              console.log(this.sortedComments);
            }
          })
        })
      });

      this.blogData.content.mainContent = this.sanitizer.bypassSecurityTrustHtml(this.blogData.content.mainContent);
    });
  }

  public loadDate() {
    const date = new Date().toString();
    return date.split(' ').slice(1, 4).join(' ');
  }

  submitReply() {

  }

  closeReplyForm() {
    this.isReplyFormVisible = false;
  }

  replyPopup() {
    this.isReplyFormVisible = true;
  }

  comment() {
    if (this.commentForm.valid) {
      if (this.userProfile.name !== undefined && this.userProfile.name !== null) {
        if (this.userProfile.name !== 'undefined') {
          this.commentService.createComment({
            id: null,
            blogId: this.blogId,
            name: this.userProfile.name,
            email: this.userProfile.email,
            profile: this.userProfile.picture,
            date: this.loadDate(),
            comment: this.commentForm.value.comment,
            reply: '',
            like: 0
          }).subscribe(
            (data) => {
              this.commentData.push(data);
              this.commentForm.reset();
              this.loadBlog()
            }, (error) => {
              this.openSnackBar(error.message, 'Close');
            }
          )
        } else {
          this.openSnackBar('Something wrong with your email. Please try again with proper email', 'Close');
        }
      } else {
        this.openSnackBar('Please login to comment', 'Close');
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }
}
