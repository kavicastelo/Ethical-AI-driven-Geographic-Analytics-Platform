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
  selectedCommentId: any;

  isLiked: boolean = false
  likedComments: Set<string> = new Set();

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
            }
          })
        })
      });

      this.blogData.content.mainContent = this.sanitizer.bypassSecurityTrustHtml(this.blogData.content.mainContent);
    });

    return this.blogData;
  }

  public loadDate() {
    const date = new Date().toString();
    return date.split(' ').slice(1, 4).join(' ');
  }

  submitReply() {
    let selectedComment;
    if (this.replyForm.valid) {
      this.commentService.getAllComments().subscribe((comments: any) => {
        const filteredComments = comments.filter((comment: any) => comment.id == this.selectedCommentId);

        if (filteredComments.length > 0) {
          selectedComment = filteredComments[0];

          this.commentService.updateComment({
            id: selectedComment.id,
            blogId: selectedComment.blogId,
            name: this.userProfile.name,
            email: this.userProfile.email,
            profile: this.userProfile.picture,
            date: this.loadDate(),
            comment: selectedComment.comment,
            reply: [...selectedComment.reply, {
              id: Math.random().toString(36).slice(-8),
              commentId: selectedComment.id,
              name: this.userProfile.name,
              email: this.userProfile.email,
              profile: this.userProfile.picture,
              date: this.loadDate(),
              replyComment: this.replyForm.value.reply
            }],
            like: selectedComment.like
          }).subscribe(res => {
            location.reload();
          }, error => {
            this.openSnackBar(error.message, 'Close');
          });
        } else {
          this.openSnackBar('Comment not found', 'Close');
        }
      });
    }
  }

  closeReplyForm() {
    this.isReplyFormVisible = false;
  }

  replyPopup(id: any) {
    this.isReplyFormVisible = true;
    return this.selectedCommentId = id;
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
            reply: [{
              id: null,
              commentId: null,
              name: "Geographical Analysis Platform",
              email: null,
              profile: "https://e7.pngegg.com/pngimages/858/1004/png-clipart-computer-icons-verified-badge-others-blue-heart-thumbnail.png",
              date: this.loadDate(),
              replyComment: "Thanks for your comment!"
            }],
            like: 0
          }).subscribe(
            (data) => {
              this.commentData.push(data);
              this.commentForm.reset();
              this.loadBlog();
              location.reload();
            }, (error) => {
              this.openSnackBar(error.message, 'Close');
            }
          )
        } else {
          this.openSnackBar('Something wrong with your email. Please try again with proper email', 'Close');
          this.cookieService.deleteUserProfile();
        }
      } else {
        this.openSnackBar('Please login to comment', 'Close');
      }
    }
  }

  like(id: any) {
    this.isLiked = this.likedComments.has(id)
    let count: number = 0;
    let selectedComment;

    this.commentService.getAllComments().subscribe(data => {

      const filteredComments = data.filter((comment: any) => comment.id == id);

      if (filteredComments.length > 0) {
        selectedComment = filteredComments[0];

        count = parseInt(selectedComment.like)

        if (!this.isLiked) {
          this.likedComments.add(id)
          localStorage.setItem(selectedComment.id+'comment-like', JSON.stringify(true))
          count++
        }
        else {
          this.likedComments.delete(id)
          localStorage.setItem(selectedComment.id+'comment-like', JSON.stringify(false))
          count = count - 1
        }

        this.commentService.likeComment({
          id: selectedComment.id,
          blogId: this.blogId,
          name: this.userProfile.name,
          email: this.userProfile.email,
          profile: this.userProfile.picture,
          date: this.loadDate(),
          comment: this.commentForm.value.comment,
          reply: [{
            id: Math.random().toString(36 ).slice( -8 ),
            commentId: null,
            name: "Geographical Analysis Platform",
            email: null,
            profile: "https://e7.pngegg.com/pngimages/858/1004/png-clipart-computer-icons-verified-badge-others-blue-heart-thumbnail.png",
            date: this.loadDate(),
            replyComment: "Thanks for your comment!"
          }],
          like: count
        }).subscribe(data => {
          this.matSnackBar.open(this.isLiked?'Liked Comment':'Disliked Comment', 'OK',{duration: 1500})
          location.reload();
        })

      }
    })
  }

  isLikedComment(id: any) {
    return localStorage.getItem(id + 'comment-like') == 'true';
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }
}
