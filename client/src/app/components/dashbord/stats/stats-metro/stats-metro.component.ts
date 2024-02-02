import {Component, OnInit} from '@angular/core';
import {AirQualityService} from "../../../../services/air-quality.service";
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MetrologicalService} from "../../../../services/metrological.service";

@Component({
  selector: 'app-stats-metro',
  templateUrl: './stats-metro.component.html',
  styleUrls: ['./stats-metro.component.scss'],
  providers: [DatePipe]
})
export class StatsMetroComponent implements OnInit {

  factors: any[] = [
    'Temperature',
    'Humidity',
    'WindSpeed',
    'Precipitation',
  ]

  avgForm = new FormGroup({
    mean: new FormControl('', [
      Validators.required
    ]),
    start: new FormControl(new Date(2023, 1, 15)),
    end: new FormControl(new Date(2024, 1, 19)),
  })

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

  constructor(private metrologicalService: MetrologicalService, private datePipe: DatePipe) {
  }
  ngOnInit(): void {
  }

  changeMeanFactor() {
    let result = document.getElementById('mean-result')
    result!.innerHTML = 'RESULT'
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
      this.metrologicalService.calculateMedian(factor).subscribe({
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
      this.metrologicalService.calculateMode(factor).subscribe({
        next: (res) => {
          result!.innerHTML = res
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  calculateAvg() {
    let startDate = this.avgForm.get('start')?.value
    let endDate = this.avgForm.get('end')?.value
    let result = document.getElementById('mean-result')
    if (this.avgForm.valid) {
      this.metrologicalService.calculateAvgByDateRange({
        factor: this.avgForm.get('mean')?.value,
        dateRange: this.formatDateRange(startDate, endDate)
      }).subscribe({
        next: (res) => {
          result!.innerHTML = res
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  }

  formatDateRange(startDate: any, endDate: any): string {
    const formattedStartDate = this.datePipe.transform(startDate, 'yyyy-MM-dd') || '';
    const formattedEndDate = this.datePipe.transform(endDate, 'yyyy-MM-dd') || '';
    return `startDate=${formattedStartDate}&endDate=${formattedEndDate}`;
  }

  formatDateRangeHint(startDate: any, endDate: any): string {
    const formattedStartDate = this.datePipe.transform(startDate, 'yyyy-MM-dd') || '';
    const formattedEndDate = this.datePipe.transform(endDate, 'yyyy-MM-dd') || '';
    return `${formattedStartDate} - ${formattedEndDate}`;
  }

}
