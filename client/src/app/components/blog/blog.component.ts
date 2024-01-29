import { Component } from '@angular/core';
import {filter, Subscription} from "rxjs";
import {ThemeService} from "../../services/theme.service";
import {blogDataStore} from "../../shared/store/blog-data-store";
import {NavigationEnd, Router} from "@angular/router";
import {ScrollService} from "../../services/scroll.service";
import {BlogService} from "../../services/blog.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;

  blogData:any;
  isLoading: boolean = true;

  constructor(private themeService: ThemeService, private router: Router, private scrollService: ScrollService, private blogService: BlogService, private matSnackBar: MatSnackBar) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadBlogs()
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Reload the page when the route changes
        window.location.reload();
        window.scrollTo(0, 0);
      });
  }

  loadBlogs() {
    this.blogService.getAllBlogs().subscribe((data: any) => {
      this.isLoading = false;
      this.blogData = data;
    }, (error: any) => {
      this.openSnackBar('Error loading blogs', 'Close');
    })
  }

  OpenBlog(id:any) {
    this.router.navigate(['/blog-det', id]);
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action,{duration: 3000});
  }
}
