import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AirQualityService} from "../../../../services/air-quality.service";

@Component({
  selector: 'app-stats-air',
  templateUrl: './stats-air.component.html',
  styleUrls: ['./stats-air.component.scss']
})
export class StatsAirComponent implements OnInit {

  constructor(private airQualityService: AirQualityService) {
  }
  factors: any[] = [
    'Pm25',
    'Pm10',
    'Co2',
    'Ozone',
    'No2',
    'Temperature',
    'Humidity',
    'WindSpeed'
  ]

  medianForm = new FormGroup({
    median: new FormControl('', [
      Validators.required
    ])
  })
  modeForm = new FormGroup({
    mode: new FormControl('', [
      Validators.required
    ])
  })

  ngOnInit(): void {
  }

  changeMedianFactor() {
    let result = document.getElementById('median-result')
    result!.innerHTML = 'RESULT'
  }

  changeModeFactor() {
    let result = document.getElementById('mode-result')
    result!.innerHTML = 'RESULT'
  }

  calculateMedian() {
    let factor = this.medianForm.get('median')?.value
    let result = document.getElementById('median-result')
    if (this.medianForm.valid) {
      this.airQualityService.calculateMedian(factor).subscribe({
        next: (res) => {
          result!.innerHTML = res
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  calculateMode() {
    let factor = this.modeForm.get('mode')?.value
    let result = document.getElementById('mode-result')
    if (this.modeForm.valid) {
      this.airQualityService.calculateMode(factor).subscribe({
        next: (res) => {
          result!.innerHTML = res
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

}
