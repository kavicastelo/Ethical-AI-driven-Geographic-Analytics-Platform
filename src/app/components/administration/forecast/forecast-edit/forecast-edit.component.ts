import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {forecastDataStore} from "../../../../shared/store/forecast-data-store";
import {ForecastService} from "../../../../services/forecast.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-forecast-edit',
  templateUrl: './forecast-edit.component.html',
  styleUrls: ['./forecast-edit.component.scss']
})
export class ForecastEditComponent implements OnInit {
  draftItem: any;
  forecast: any;
  visibility: any;

  constructor(private sanitizer: DomSanitizer, private forecastService: ForecastService, private snackBar: MatSnackBar) { }

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
          this.visibility = this.forecast.visible

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
    if (this.editForecastForm.valid) {
      this.forecastService.updateForecast({
        id: 1,
        title: this.forecast.title,
        dateTime: this.forecast.dateTime,
        description: this.editForecastForm.value.description,
        likes: this.forecast.likes,
        visible: true
      }).subscribe(
        res => {
          this.openSnackBar("Forecast Updated",'OK');
        }, err => {
          this.openSnackBar(err.error.message,'OK');
        }
      )
    }
    this.loadCurrentForecast()
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

  changeVisibility() {
    this.visibility = !this.visibility;

    let changedVisibility = this.visibility;

    this.forecastService.updateForecast({
      id: 1,
      title: this.forecast.title,
      dateTime: this.forecast.dateTime,
      description: this.forecast.description.toString(),
      likes: this.forecast.likes,
      visible: changedVisibility
    }).subscribe(
      res => {
        this.openSnackBar("Visibility Updated",'OK');
      }, err => {
        this.openSnackBar(err.error.message,'OK');
      }
    )
    this.loadCurrentForecast();
    location.reload();
  }

  deleteForecast() {
    const msg = "Are you sure you want to delete this forecast?";
    if (confirm(msg)) {
      this.forecastService.deleteForecast(1).subscribe(
        res => {
          this.openSnackBar("Forecast Deleted",'OK');
        }, err => {
          this.openSnackBar(err.error.message,'OK');
        }
      )
      location.reload();
    }
    else{
      return
    }
  }
}
