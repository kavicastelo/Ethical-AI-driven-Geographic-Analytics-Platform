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
        subTitle: this.fb.array(['']),
        subContent: this.fb.array(['']),
      }),
      image: '',
      tags: '',
      author: '',
    });
  }

  getSubTitlesControls() {
    return (this.blogForm.get('content.subTitle') as FormArray).controls;
  }

  getSubContentsControls() {
    return (this.blogForm.get('content.subContent') as FormArray).controls;
  }

  onSubmit() {
    // Get the form values
    const formData: BlogModel = this.blogForm?.value;

    // Filter out any empty sub-titles and sub-contents
    formData.content.subTitle = formData.content.subTitle.filter(title => title.trim() !== '');
    formData.content.subContent = formData.content.subContent.filter(content => content.trim() !== '');

    // Now you can send formData to your backend or handle it as needed
    console.log(formData);
  }

}
