import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {BlogModel} from "../../../../shared/model/Blog.model";
import {BlogService} from "../../../../services/blog.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-blogs-new',
  templateUrl: './blogs-new.component.html',
  styleUrls: ['./blogs-new.component.scss']
})
export class BlogsNewComponent implements OnInit {
  blogForm: FormGroup | any;
  markdownContent = '';

  constructor(private fb: FormBuilder, private blogService: BlogService, private matSnackBar: MatSnackBar) {}

  ngOnInit() {
    this.initForm();
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

  onSubmit() {
    // Get the form values
    const formData: BlogModel = this.blogForm?.value;

    this.blogService.createBlog({
      id: null,
      title: formData.title,
      description: formData.description,
      content: formData.content,
      image: formData.image,
      tags: formData.tags,
      created_at: formData.created_at,
      updated_at: formData.updated_at,
      author: formData.author
    }).subscribe(
      (data) => {
        this.openSnackBar('Blog created successfully', 'Close');
      },
      (error) => {
        this.openSnackBar('Error creating blog', 'Close');
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action);
  }

}
