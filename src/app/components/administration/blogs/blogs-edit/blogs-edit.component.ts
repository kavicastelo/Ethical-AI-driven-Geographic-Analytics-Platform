import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BlogModel} from "../../../../shared/model/Blog.model";
import {blogDataStore} from "../../../../shared/store/blog-data-store";
import {BlogService} from "../../../../services/blog.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-blogs-edit',
  templateUrl: './blogs-edit.component.html',
  styleUrls: ['./blogs-edit.component.scss']
})
export class BlogsEditComponent implements OnInit {
  blogForm: FormGroup | any;
  markdownContent = '';
  blogData: any;
  private selectedBlog: any;

  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder, private blogService: BlogService, private matSnackBar: MatSnackBar) {}

  ngOnInit() {
    this.initForm();
    this.loadBlogs();

    this.blogForm.get('title')?.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((selectedBlog: any) => {
        this.loadCurrentBlog(selectedBlog);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initForm() {
    this.blogForm = this.fb.group({
      title: '',
      description: '',
      content: this.fb.group({
        mainTitle: '',
        mainContent: '',
        subContent: '',
      }),
      image: '',
      tags: '',
      author: '',
    });
  }

  loadBlogs() {
    this.blogService.getAllBlogs().subscribe((data: any) => {
      this.blogData = data;
    }, (error: any) => {
      console.log(error);
    })
  }

  loadCurrentBlog(blog: any) {
    this.selectedBlog = this.blogData.find((b: any) => b.title === blog);
    if (this.selectedBlog) {
      this.blogForm.get('description')?.setValue(this.selectedBlog.description);
      this.blogForm.get('image')?.setValue(this.selectedBlog.image);
      this.blogForm.get('author')?.setValue(this.selectedBlog.author);
      this.blogForm.get('content.mainTitle')?.setValue(this.selectedBlog.content.mainTitle);
      this.blogForm.get('content.mainContent')?.setValue(this.selectedBlog.content.mainContent);
      this.blogForm.get('content.subContent')?.setValue(this.selectedBlog.content.subContent);
      this.markdownContent = this.selectedBlog.content.subContent;
    }
  }

  onSubmit() {
    // Get the form values
    const formData: BlogModel = this.blogForm?.value;

    // Now you can send formData to your backend or handle it as needed
    console.log(formData);
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }
}
