import {Component, OnInit} from '@angular/core';
import {MetrologicalService} from "../../../../services/metrological.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-prediction-metro',
  templateUrl: './prediction-metro.component.html',
  styleUrls: ['./prediction-metro.component.scss']
})
export class PredictionMetroComponent implements OnInit {
  isLoading: boolean = false;

  factors: any[] = ['temperature', 'humidity', 'windSpeed', 'precipitation']

  filterForm = new FormGroup({
    filter: new FormControl(''),
    temperature: new FormControl(0, [
      Validators.required
    ]),
    humidity: new FormControl(0, [
      Validators.required
    ]),
    windSpeed: new FormControl(0, [
      Validators.required
    ]),
    precipitation: new FormControl(0, [
      Validators.required
    ])
  })

  constructor(private metrologicalService: MetrologicalService) {
  }

  ngOnInit(): void {
    this.changeFactor()
  }

  changeFactor() {
    let filterValue = this.filterForm.get('filter')?.value;
    switch (filterValue) {
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
      case 'precipitation':
        this.filterForm.enable();
        this.filterForm.controls['precipitation'].disable();
        break;
      default:
        this.filterForm.disable();
        this.filterForm.controls['filter'].enable();
        break;
    }
    let result = document.getElementById('result');
    result!.innerHTML = 'Result will appear here'
  }

  predict() {
    let result = document.getElementById('result');
    if (this.filterForm.get('filter')?.value == 'temperature') {
      this.loading()
      this.metrologicalService.predictTemperature([
        this.filterForm.value.humidity,
        this.filterForm.value.windSpeed,
        this.filterForm.value.precipitation
      ]).subscribe(res => {
        result!.innerHTML = res.message
        this.loading()
      })
    } else if (this.filterForm.get('filter')?.value == 'humidity') {
      this.loading()
      this.metrologicalService.predictHumidity([
        this.filterForm.value.temperature,
        this.filterForm.value.windSpeed,
        this.filterForm.value.precipitation
      ]).subscribe(res => {
        result!.innerHTML = res.message
        this.loading()
      })
    }
    else if (this.filterForm.get('filter')?.value == 'windSpeed') {
      this.loading()
      this.metrologicalService.predictWindSpeed([
        this.filterForm.value.temperature,
        this.filterForm.value.humidity,
        this.filterForm.value.precipitation
      ]).subscribe(res => {
        result!.innerHTML = res.message
        this.loading()
      })
    }
    else if (this.filterForm.get('filter')?.value == 'precipitation') {
      this.loading()
      this.metrologicalService.predictPrecipitation([
        this.filterForm.value.temperature,
        this.filterForm.value.humidity,
        this.filterForm.value.windSpeed
      ]).subscribe(res => {
        result!.innerHTML = res.message
        this.loading()
      })
    }
  }

  loading() {
    this.isLoading = !this.isLoading
    let element = document.getElementById('predict') as HTMLElement;
    if (this.isLoading) {
      element.innerHTML = '<img src="./assets/images/shared/loading-circle.gif" alt="loading" width="30" height="30">'
    }
    else {
      element.innerHTML = 'Predict'
    }
  }
}
