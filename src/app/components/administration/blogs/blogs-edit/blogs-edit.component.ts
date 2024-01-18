import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BlogModel} from "../../../../shared/model/Blog.model";
import {blogDataStore} from "../../../../shared/store/blog-data-store";
import {BlogService} from "../../../../services/blog.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(private fb: FormBuilder, private blogService: BlogService, private matSnackBar: MatSnackBar) {}

  ngOnInit() {
    this.initForm();
    this.loadBlogs();
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
    this.blogData.forEach((b: any) => {
      if(blog === b.title) {
        this.selectedBlog = b;
        this.blogForm.get('description')?.setValue(b.description);
        this.blogForm.get('image')?.setValue(b.image);
        this.blogForm.get('author')?.setValue(b.author);
        this.blogForm.get('content.mainTitle')?.setValue(b.content.mainTitle);
        this.blogForm.get('content.mainContent')?.setValue(b.content.mainContent);
        this.blogForm.get('content.subContent')?.setValue(b.content.subContent);
        this.markdownContent = b.content.subContent;
      }
    })
  }

  onSubmit() {
    // Get the form values
    const formData: BlogModel = this.blogForm?.value;

    // Now you can send formData to your backend or handle it as needed
    console.log(formData);
  }
}
