import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {forecastDataStore} from "../../../../shared/store/forecast-data-store";

@Component({
  selector: 'app-forecast-edit',
  templateUrl: './forecast-edit.component.html',
  styleUrls: ['./forecast-edit.component.scss']
})
export class ForecastEditComponent implements OnInit {
  draftItem: any;
  forecast: any = forecastDataStore;

  constructor(private sanitizer: DomSanitizer) { }

  editForecastForm = new FormGroup({
    description: new FormControl(null,[
      Validators.required
    ])
  })

  ngOnInit(): void {
    this.loadCurrentForecast()
  }

  loadCurrentForecast() {
    let obj = this.forecast[0].description;
    let arr = new Array({"description":obj});

    if (this.forecast[0].description != null) {
      this.editForecastForm.setValue(arr[0]);
    }
    this.forecast[0].description = this.sanitizer.bypassSecurityTrustHtml(this.forecast[0].description);
    // this.forecast[0].description = this.forecast[0].description.replace(/[\r\n]+/g," ")
  }

  updateForecast() {

  }

}
