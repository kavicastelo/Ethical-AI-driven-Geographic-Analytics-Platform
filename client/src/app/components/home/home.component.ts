import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {Subscription} from "rxjs";
import {forecastDataStore} from "../../shared/store/forecast-data-store";
import {DomSanitizer} from "@angular/platform-browser";
import {ForecastService} from "../../services/forecast.service";
import {Parser} from "@angular/compiler";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;
  isLiked: boolean = false

  forecastData:any;
  isLoading: boolean = false;

  constructor(private themeService: ThemeService, private sanitizer: DomSanitizer, private forecastService: ForecastService, private matSnackBar: MatSnackBar) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadForecast();
    this.checkLike();
  }

  loadDate() {
    const date = new Date().toString();
    return date.split(' ').slice(1,4).join(' ');
  }

  loadForecast() {
    this.isLoading = true
    this.forecastService.getForecast().subscribe(data => {
      if (data.length > 0 && data[0].visible == true) {
        this.forecastData = data
        this.forecastData.description = this.sanitizer.bypassSecurityTrustHtml(this.forecastData.description);
      } else {
        this.forecastData = [
          {
            id: 1,
            title: 'AIR QUALITY FORECAST ALERT',
            dateTime: this.loadDate(),
            description: 'SEEMS CURRENTLY NO DATA AVAILABLE OR WE ARE WORKING ON IT. SORRY FOR THE INCONVENIENCE',
            likes: 0
          }
        ]
      }
    })
    this.isLoading = false
  }

  like() {
    this.isLiked = !this.isLiked
    let count;

    this.forecastService.getForecast().subscribe(data => {
      count = parseInt(data[0].likes)
      if (this.isLiked) {
        localStorage.setItem('forecast-like', JSON.stringify(true))
        count++
      }
      else {
        localStorage.setItem('forecast-like', JSON.stringify(false))
        count = count - 1
      }
      this.forecastService.likeForecast({
        id: 1,
        title: data.title,
        dateTime: data.dateTime,
        description: data.description,
        likes: count,
        visible: data.visible
      }).subscribe(data => {
        this.matSnackBar.open(this.isLiked?'Liked Forecast':'Disliked Forecast', 'OK',{duration: 1500})
        this.loadForecast()
      })
    })
  }

  checkLike() {
    this.isLiked = localStorage.getItem('forecast-like') == 'true'
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {
      duration: 1500
    });
  }
}
