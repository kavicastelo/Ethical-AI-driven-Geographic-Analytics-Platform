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
  tags: any = ["Seed", "Sprout", "Root"];

  private destroy$ = new Subject<void>();

  isLoading: boolean = false;

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
    });
  }

  loadBlogs() {
    this.blogService.getAllBlogs().subscribe((data: any) => {
      this.blogData = data;
    }, (error: any) => {
      console.log(error);
    })
  }

  loadDate() {
    const date = new Date().toString();
    return date.split(' ').slice(1,4).join(' ');
  }

  loadCurrentBlog(blog: any) {
    this.selectedBlog = this.blogData.find((b: any) => b.title === blog);
    if (this.selectedBlog) {
      this.blogForm.get('description')?.setValue(this.selectedBlog.description);
      this.blogForm.get('image')?.setValue(this.selectedBlog.image);
      this.blogForm.get('tags')?.setValue(this.selectedBlog.tags);
      this.blogForm.get('content.mainTitle')?.setValue(this.selectedBlog.content.mainTitle);
      this.blogForm.get('content.mainContent')?.setValue(this.selectedBlog.content.mainContent);
      this.blogForm.get('content.subContent')?.setValue(this.selectedBlog.content.subContent);
      this.markdownContent = this.selectedBlog.content.subContent;
    }
  }

  onSubmit() {
    // Get the form values
    const formData: BlogModel = this.blogForm?.value;

    this.isLoading = true;
    if (this.blogForm.valid){
      this.blogService.updateBlog({
        id: this.selectedBlog.id,
        title: formData.title,
        description: formData.description,
        content: formData.content,
        image: formData.image,
        tags: formData.tags,
        created_at: null,
        updated_at: this.loadDate(),
        author: null
      }).subscribe(
        (data: any) => {
          this.isLoading = false;
          this.openSnackBar('Blog updated successfully', 'Close');
          this.loadBlogs();
          this.blogForm.reset();
        },
        (error: any) => {
          console.log(error);
        }
      )
    }
    else {
      this.isLoading = false;
      this.openSnackBar('Please fill all required fields', 'Close');
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }
}
