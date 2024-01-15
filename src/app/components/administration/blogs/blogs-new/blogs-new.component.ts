import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {BlogModel} from "../../../../shared/model/Blog.model";

@Component({
  selector: 'app-blogs-new',
  templateUrl: './blogs-new.component.html',
  styleUrls: ['./blogs-new.component.scss']
})
export class BlogsNewComponent implements OnInit {
  blogForm: FormGroup | any;
  markdownContent = '';

  constructor(private fb: FormBuilder) {}

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

    // Now you can send formData to your backend or handle it as needed
    console.log(formData);
  }

}
