import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {forecastDataStore} from "../../../../shared/store/forecast-data-store";
import {ForecastService} from "../../../../services/forecast.service";

@Component({
  selector: 'app-forecast-edit',
  templateUrl: './forecast-edit.component.html',
  styleUrls: ['./forecast-edit.component.scss']
})
export class ForecastEditComponent implements OnInit {
  draftItem: any;
  forecast: any;

  constructor(private sanitizer: DomSanitizer, private forecastService: ForecastService) { }

  editForecastForm = new FormGroup({
    description: new FormControl(null,[
      Validators.required
    ])
  })

  ngOnInit(): void {
    this.loadCurrentForecast()
  }

  loadCurrentForecast() {
    this.forecastService.getForecast().subscribe(
      res => {
        if (res != null && res.length > 0){
          this.forecast = res[0];

          let obj = this.forecast.description;
          let arr = new Array({"description":obj});
          if (this.forecast.description != null) {
            this.editForecastForm.setValue(arr[0]);
          }

          this.forecast.description = this.sanitizer.bypassSecurityTrustHtml(this.forecast.description);
        }
      }
    )
    // this.forecast[0].description = this.forecast[0].description.replace(/[\r\n]+/g," ")
  }

  updateForecast() {

  }

}
