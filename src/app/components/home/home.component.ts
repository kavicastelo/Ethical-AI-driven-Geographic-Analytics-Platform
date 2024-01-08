import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {Subscription} from "rxjs";
import {forecastDataStore} from "../../shared/store/forecast-data-store";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;
  isLiked: boolean = false

  forecastData:any = forecastDataStore

  constructor(private themeService: ThemeService, private sanitizer: DomSanitizer) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    // this.forecastData[3] = this.sanitizer.bypassSecurityTrustHtml(this.forecastData[3]);
  }

  like() {
    this.isLiked = !this.isLiked
    let count;
    this.forecastData.forEach((element:any) => {
      count = element.likes

      if (this.isLiked) {
        count++
      }
      else {
        count = count - 1
      }
      count = element.likes
    })
  }
}
