import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {blogDataStore} from "../../shared/store/blog-data-store";
import {ThemeService} from "../../services/theme.service";
import {Subscription} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-blog-det',
  templateUrl: './blog-det.component.html',
  styleUrls: ['./blog-det.component.scss']
})
export class BlogDetComponent implements OnInit, OnDestroy {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;

  blogId: string | null | undefined;
  blogData:any = blogDataStore;
  subTitlesArray:any = [];
  subContentArray:any = [];

  constructor(private themeService: ThemeService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.blogId = params.get('id');
      this.blogData.forEach((blog: any) => {
        if (blog.id == this.blogId) {
          this.blogData = blog;
        }
      })
    });

    this.subTitlesArray = this.blogData.content[2].subTitle;
    this.subContentArray = this.blogData.content[3].subContent;

    // Sanitize HTML content
    this.blogData.content[1].mainContent = this.sanitizer.bypassSecurityTrustHtml(this.blogData.content[1].mainContent);
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
