import {Component, OnInit} from '@angular/core';
import {AirQualityService} from "../../../../services/air-quality.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Parser} from "@angular/compiler";

@Component({
  selector: 'app-prediction-air',
  templateUrl: './prediction-air.component.html',
  styleUrls: ['./prediction-air.component.scss']
})
export class PredictionAirComponent implements OnInit {
  isLoading: boolean = false;

  factors: any[] = ['pm25', 'pm10', 'co2', 'ozone', 'no2']

  filterForm = new FormGroup({
    filter: new FormControl(''),
    pm25: new FormControl(0, [
      Validators.required
    ]),
    pm10: new FormControl(0, [
      Validators.required
    ]),
    co2: new FormControl(0, [
      Validators.required
    ]),
    ozone: new FormControl(0, [
      Validators.required
    ]),
    no2: new FormControl(0, [
      Validators.required
    ]),
    temperature: new FormControl(0, [
      Validators.required
    ]),
    humidity: new FormControl(0, [
      Validators.required
    ]),
    windSpeed: new FormControl(0, [
      Validators.required
    ])
  })

  constructor(private airQualityService: AirQualityService) {
  }

  ngOnInit(): void {
    this.changeFactor()
  }

  changeFactor() {
    let filterValue = this.filterForm.get('filter')?.value;
    switch (filterValue) {
      case 'pm25':
        this.filterForm.enable();
        this.filterForm.controls['pm25'].disable();
        break;
      case 'pm10':
        this.filterForm.enable();
        this.filterForm.controls['pm10'].disable();
        break;
      case 'co2':
        this.filterForm.enable();
        this.filterForm.controls['co2'].disable();
        break;
      case 'ozone':
        this.filterForm.enable();
        this.filterForm.controls['ozone'].disable();
        break;
      case 'no2':
        this.filterForm.enable();
        this.filterForm.controls['no2'].disable();
        break;
      case 'temperature':
        this.filterForm.enable();
        this.filterForm.controls['temperature'].disable();
        break;
      case 'humidity':
        this.filterForm.enable();
        this.filterForm.controls['humidity'].disable();
        break;
      case 'windSpeed':
        this.filterForm.enable();
        this.filterForm.controls['windSpeed'].disable();
        break;
      default:
        this.filterForm.disable();
        this.filterForm.controls['filter'].enable();
        break;
    }
  }

  predict() {
    this.airQualityService.predictPm25({
      pm10: this.filterForm.value.pm10,
      co2: this.filterForm.value.co2,
      ozone: this.filterForm.value.ozone,
      no2: this.filterForm.value.no2,
      temperature: this.filterForm.value.temperature,
      humidity: this.filterForm.value.humidity,
      windSpeed: this.filterForm.value.windSpeed
    }).subscribe(res => {
      console.log(res)
    })
  }
}
