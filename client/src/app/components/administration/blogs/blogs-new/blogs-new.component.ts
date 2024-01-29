import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {BlogModel} from "../../../../shared/model/Blog.model";
import {BlogService} from "../../../../services/blog.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthService} from "../../../../services/auth.service";
import {UserService} from "../../../../services/user.service";
import {AdminService} from "../../../../services/admin.service";

@Component({
  selector: 'app-blogs-new',
  templateUrl: './blogs-new.component.html',
  styleUrls: ['./blogs-new.component.scss']
})
export class BlogsNewComponent implements OnInit {
  blogForm: FormGroup | any;
  markdownContent = '';
  author = '';
  tags: any = ["Seed", "Sprout", "Root"];

  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private blogService: BlogService, private matSnackBar: MatSnackBar, private cookieService: AuthService, private adminService: AdminService) {}

  ngOnInit() {
    this.initForm();
    this.loadAuthor();
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

  loadDate() {
    const date = new Date().toString();
    return date.split(' ').slice(1,4).join(' ');
  }

  loadAuthor() {
    let user = this.cookieService.adminEmail();

    if (user != null) {
      this.adminService.getAdminByEmail(user).subscribe(
        (data) => {
          sessionStorage.setItem('author', JSON.stringify(data.name));
        }, (error) => {
          console.log(error)
        }
      )
    }
  }

  onSubmit() {
    // Get the form values
    const formData: BlogModel = this.blogForm?.value;
    let author;
    let tag;
    let loggedAuthor = sessionStorage.getItem('author')

    if (this.blogForm.valid) {
      if (formData.author != null && formData.author !== '') {
        author = formData.author;
      } else {
        author = loggedAuthor
      }
      if (formData.tags != null && formData.tags !== '') {
        tag = formData.tags;
      }
      else {
        tag = 'Seed';
      }
      this.isLoading = true;
      this.blogService.createBlog({
        id: null,
        title: formData.title,
        description: formData.description,
        content: formData.content,
        image: formData.image,
        tags: tag,
        created_at: this.loadDate(),
        updated_at: this.loadDate(),
        author: author
      }).subscribe(
        (data) => {
          this.isLoading = false;
          this.openSnackBar('Blog created successfully', 'Close');
          this.blogForm.reset();
        },
        (error) => {
          this.openSnackBar('Error creating blog', 'Close');
        }
      )
    }

  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action,{duration: 3000});
  }

}
