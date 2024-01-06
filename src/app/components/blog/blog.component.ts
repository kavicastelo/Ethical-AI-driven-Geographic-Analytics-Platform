import { Component } from '@angular/core';
import {Subscription} from "rxjs";
import {ThemeService} from "../../services/theme.service";
import {blogDataStore} from "../../shared/store/blog-data-store";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;

  blogData:any = blogDataStore;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  ngOnInit(): void {
  }
}
