import {Component, OnInit} from '@angular/core';
import {blogDataStore} from "../../../../shared/store/blog-data-store";
import {BlogService} from "../../../../services/blog.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent implements OnInit {
  blogs: any;

  constructor(private blogService: BlogService, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadBlogs()
  }

  loadBlogs() {
    this.blogService.getAllBlogs().subscribe((data: any) => {
      this.blogs = data;
    })
  }

  deleteBlog(id:any) {
    if (confirm('Are you sure you want to delete this blog?')) {
      this.blogService.deleteBlog(id).subscribe(() => {
        this.loadBlogs();
        this.openSnackBar('Blog deleted successfully', 'Close');
      }, error => {
        this.openSnackBar('Error deleting blog', 'Close');
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }
}
