import { Component } from '@angular/core';
import {blogDataStore} from "../../../../shared/store/blog-data-store";

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss']
})
export class BlogsListComponent {
  blogs: any = blogDataStore

  deleteBlog(id:any) {

  }
}
