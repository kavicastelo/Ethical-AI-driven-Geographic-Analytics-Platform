import {Component, OnDestroy, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {Subscription} from "rxjs";
import {forecastDataStore} from "../../shared/store/forecast-data-store";
import {DomSanitizer} from "@angular/platform-browser";
import {ForecastService} from "../../services/forecast.service";
import {Parser} from "@angular/compiler";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MetrologicalService} from "../../services/metrological.service";
import {AirQualityService} from "../../services/air-quality.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;
  isLiked: boolean = false

  forecastData: any;
  isLoading: boolean = true;

  avgTemperature: number = 0
  avgHumidity: number = 0
  avgWindSpeed: number = 0
  avgCo2: number = 0;
  avgPm10: number = 0;
  avgPm25: number = 0;
  avgO3: number = 0;
  avgNo2: number = 0;

  constructor(
    private themeService: ThemeService,
    private sanitizer: DomSanitizer,
    private forecastService: ForecastService,
    private matSnackBar: MatSnackBar,
    private airQualityService: AirQualityService,
    private metrologicalService: MetrologicalService) {
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
    this.calculateTemperature()
    this.calculateHumidity()
    this.calculateWindSpeed()
  }

  loadDate() {
    const date = new Date().toString();
    return date.split(' ').slice(1, 4).join(' ');
  }

  loadForecast() {
    this.isLoading = true
    this.forecastService.getForecast().subscribe(data => {
      this.isLoading = false
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
  }

  like() {
    this.isLiked = !this.isLiked
    let count;

    this.forecastService.getForecast().subscribe(data => {
      count = parseInt(data[0].likes)
      if (this.isLiked) {
        localStorage.setItem('forecast-like', JSON.stringify(true))
        count++
      } else {
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
        this.matSnackBar.open(this.isLiked ? 'Liked Forecast' : 'Disliked Forecast', 'OK', {duration: 1500})
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

  calculateTemperature(): number {
    let temperature:any = 0;
    this.metrologicalService.getAllMetrological().subscribe(data => {
      let temp = data.map((item: any) => item.temperature).splice(-100)

      temp.forEach((item: any) => {
        let floatItem = parseFloat(item)
        temperature += floatItem
      })

      temperature = temperature / temp.length;
      this.avgTemperature = temperature
    })
    return this.avgTemperature
  }

  calculateHumidity(): number {
    let humidity:any = 0;
    this.metrologicalService.getAllMetrological().subscribe(data => {
      let temp = data.map((item: any) => item.humidity).splice(-100)

      temp.forEach((item: any) => {
        let floatItem = parseFloat(item)
        humidity += floatItem
      })

      humidity = humidity / temp.length;
      this.avgHumidity = humidity
    })
    return this.avgHumidity
  }

  calculateWindSpeed(): number {
    let windSpeed:any = 0;
    this.metrologicalService.getAllMetrological().subscribe(data => {
      let temp = data.map((item: any) => item.windSpeed).splice(-100)

      temp.forEach((item: any) => {
        let floatItem = parseFloat(item)
        windSpeed += floatItem
      })

      windSpeed = windSpeed / temp.length;
      this.avgWindSpeed = windSpeed
    })
    return this.avgWindSpeed
  }

  calculateCo2(): number {
    let co2:any = 0;
    this.airQualityService.getAllAirQuality().subscribe(data => {
      let temp = data.map((item: any) => item.co2).splice(-100)

      temp.forEach((item: any) => {
        let floatItem = parseFloat(item)
        co2 += floatItem
      })

      co2 = co2 / temp.length;
      this.avgCo2 = co2
    })
    return this.avgCo2
  }

  calculatePm10(): number {
    let pm10:any = 0;
    this.airQualityService.getAllAirQuality().subscribe(data => {
      let temp = data.map((item: any) => item.pm10).splice(-100)

      temp.forEach((item: any) => {
        let floatItem = parseFloat(item)
        pm10 += floatItem
      })

      pm10 = pm10 / temp.length;
      this.avgPm10 = pm10
    })
    return this.avgPm10
  }

  calculatePm25(): number {
    let pm25:any = 0;
    this.airQualityService.getAllAirQuality().subscribe(data => {
      let temp = data.map((item: any) => item.pm25).splice(-100)

      temp.forEach((item: any) => {
        let floatItem = parseFloat(item)
        pm25 += floatItem
      })

      pm25 = pm25 / temp.length;
      this.avgPm25 = pm25
    })
    return this.avgPm25
  }

  calculateO3(): number {
    let o3:any = 0;
    this.airQualityService.getAllAirQuality().subscribe(data => {
      let temp = data.map((item: any) => item.o3).splice(-100)

      temp.forEach((item: any) => {
        let floatItem = parseFloat(item)
        o3 += floatItem
      })

      o3 = o3 / temp.length;
      this.avgO3 = o3
    })
    return this.avgO3
  }
}
