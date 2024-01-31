import {Component, OnInit} from '@angular/core';
import {AirQualityService} from "../../../../services/air-quality.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-prediction-air',
  templateUrl: './prediction-air.component.html',
  styleUrls: ['./prediction-air.component.scss']
})
export class PredictionAirComponent implements OnInit {
  isLoading: boolean = false;

  factors: any[] = ['pm25','pm10','co2','ozone','no2']

  filterForm = new FormGroup({
    filter: new FormControl(''),
    pm25: new FormControl(0,[
      Validators.required
    ]),
    pm10: new FormControl(0,[
      Validators.required
    ]),
    co2: new FormControl(0,[
      Validators.required
    ]),
    ozone: new FormControl(0,[
      Validators.required
    ]),
    no2: new FormControl(0,[
      Validators.required
    ]),
    temperature: new FormControl(0,[
      Validators.required
    ]),
    humidity: new FormControl(0,[
      Validators.required
    ]),
    windSpeed: new FormControl(0,[
      Validators.required
    ])
  })

  constructor(private airQualityService: AirQualityService) {
  }
  ngOnInit(): void {
    this.changeFactor()
  }

  changeFactor() {
    if (this.filterForm.get('filter')?.value === '') {
      this.filterForm.controls['pm25'].disable();
      this.filterForm.controls['pm10'].disable();
      this.filterForm.controls['co2'].disable();
      this.filterForm.controls['ozone'].disable();
      this.filterForm.controls['no2'].disable();
      this.filterForm.controls['temperature'].disable();
      this.filterForm.controls['humidity'].disable();
      this.filterForm.controls['windSpeed'].disable();
    }
    else if(this.filterForm.get('filter')?.value === 'pm25'){
      this.filterForm.enable();
      this.filterForm.controls['pm25'].disable();
    }
    else if(this.filterForm.controls['filter']?.value === 'pm10'){
      this.filterForm.enable();
      this.filterForm.controls['pm10'].disable();
    }
    else if(this.filterForm.controls['filter']?.value === 'co2'){
      this.filterForm.enable();
      this.filterForm.controls['co2'].disable();
    }
    else if(this.filterForm.controls['filter']?.value === 'ozone'){
      this.filterForm.enable();
      this.filterForm.controls['ozone'].disable();
    }
    else if(this.filterForm.controls['filter']?.value === 'no2'){
      this.filterForm.enable();
      this.filterForm.controls['no2'].disable();
    }
    else if(this.filterForm.controls['filter']?.value === 'temperature'){
      this.filterForm.enable();
      this.filterForm.controls['temperature'].disable();
    }
    else if(this.filterForm.controls['filter']?.value === 'humidity'){
      this.filterForm.enable();
      this.filterForm.controls['humidity'].disable();
    }
    else if(this.filterForm.controls['filter']?.value === 'windSpeed'){
      this.filterForm.enable();
      this.filterForm.controls['windSpeed'].disable();
    }
  }

  predict() {
    console.log(this.filterForm.value)
  }
}
