import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {blogDataStore} from "../../shared/store/blog-data-store";
import {ThemeService} from "../../services/theme.service";
import {Subscription} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {commentDataStore} from "../../shared/store/comment-data-store";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BlogService} from "../../services/blog.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  replyForm = new FormGroup({
    reply: new FormControl(null,[
      Validators.required
    ])
  });
  commentForm = new FormGroup({
    comment: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private themeService: ThemeService, private route: ActivatedRoute, private sanitizer: DomSanitizer, private blogService: BlogService, private matSnackBar: MatSnackBar) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnInit() {
    this.loadBlog();
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

        this.commentData.forEach((comment: any) => {
          if (comment.blogId == this.blogId) {
            this.sortedComments.push(comment);
          }
        })
      });

      this.blogData.content.mainContent = this.sanitizer.bypassSecurityTrustHtml(this.blogData.content.mainContent);
    });
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

  }
}
