import { Component } from '@angular/core';
import {filter, Subscription} from "rxjs";
import {ThemeService} from "../../services/theme.service";
import {blogDataStore} from "../../shared/store/blog-data-store";
import {NavigationEnd, Router} from "@angular/router";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;

  blogData:any = blogDataStore;

  constructor(private themeService: ThemeService, private router: Router, private scrollService: ScrollService) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Reload the page when the route changes
        window.location.reload();
        window.scrollTo(0, 0);
      });
  }

  OpenBlog(id:any) {
    this.router.navigate(['/blog-det', id]);
  }
}
