import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {blogDataStore} from "../../shared/store/blog-data-store";

@Component({
  selector: 'app-blog-det',
  templateUrl: './blog-det.component.html',
  styleUrls: ['./blog-det.component.scss']
})
export class BlogDetComponent implements OnInit {
  blogId: string | null | undefined;
  blogData:any = blogDataStore;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.blogId = params.get('id');
      this.blogData.forEach((blog: any) => {
        if (blog.id == this.blogId) {
          this.blogData = blog;
        }
      })
    });
  }
}
