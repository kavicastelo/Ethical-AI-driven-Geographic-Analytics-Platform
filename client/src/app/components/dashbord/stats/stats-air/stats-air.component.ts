import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AirQualityService} from "../../../../services/air-quality.service";
import {DatePipe} from "@angular/common";
import {catchError, forkJoin, map, of} from "rxjs";

@Component({
  selector: 'app-stats-air',
  templateUrl: './stats-air.component.html',
  styleUrls: ['./stats-air.component.scss'],
  providers: [DatePipe]
})
export class StatsAirComponent implements OnInit {

  constructor(private airQualityService: AirQualityService, private datePipe: DatePipe) {
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

  correlationMatrix: any[][] = [];

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

  avgForm = new FormGroup({
    mean: new FormControl('', [
      Validators.required
    ]),
    start: new FormControl(new Date(2023, 1, 15)),
    end: new FormControl(new Date(2024, 1, 19)),
  });

  ngOnInit(): void {
    this.loadCorrelationMatrix()
  }

  changeMedianFactor() {
    let result = document.getElementById('median-result')
    result!.innerHTML = 'RESULT'
  }

  changeModeFactor() {
    let result = document.getElementById('mode-result')
    result!.innerHTML = 'RESULT'
  }

  changeMeanFactor() {
    let result = document.getElementById('mean-result')
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

  calculateAvg() {
    let startDate = this.avgForm.get('start')?.value
    let endDate = this.avgForm.get('end')?.value
    let result = document.getElementById('mean-result')
    if (this.avgForm.valid) {
      this.airQualityService.calculateAvgByDateRange({
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

  loadCorrelationMatrix() {
    const requests = [];

    for (let i = 0; i < this.factors.length; i++) {
      for (let j = 0; j < this.factors.length; j++) {
        const factor1 = this.factors[i];
        const factor2 = this.factors[j];

        const request = this.airQualityService.getCorrelation(`${factor1}And${factor2}`).pipe(
          map(data => parseFloat(data)),
          catchError(error => {
            console.log(`Error fetching correlation data for ${factor1} and ${factor2}`);
            return of(1); // Set a default value in case of an error
          })
        );

        requests.push(request);
      }
    }

    forkJoin(requests).subscribe(data => {
      let index = 0;
      for (let i = 0; i < this.factors.length; i++) {
        const row: number[] = [];
        for (let j = 0; j < this.factors.length; j++) {
          row.push(data[index]);
          index++;
        }
        this.correlationMatrix.push(row);
      }
    });
  }
}
