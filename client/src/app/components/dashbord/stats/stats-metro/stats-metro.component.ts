import {Component, OnInit} from '@angular/core';
import {AirQualityService} from "../../../../services/air-quality.service";
import {DatePipe} from "@angular/common";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MetrologicalService} from "../../../../services/metrological.service";
import {catchError, forkJoin, map, of} from "rxjs";

@Component({
  selector: 'app-stats-metro',
  templateUrl: './stats-metro.component.html',
  styleUrls: ['./stats-metro.component.scss'],
  providers: [DatePipe]
})
export class StatsMetroComponent implements OnInit {

  isLoading: boolean = false

  factors: any[] = [
    'Temperature',
    'Humidity',
    'WindSpeed',
    'Precipitation',
  ]

  correlationMatrix: any[][] = [];

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
    this.loadCorrelationMatrix()
  }

  loading(id: string) {
    this.isLoading = !this.isLoading
    let element = document.getElementById(id) as HTMLElement;
    if (this.isLoading) {
      element.innerHTML = '<img src="./assets/images/shared/loading-circle.gif" alt="loading" width="30" height="30">'
    }
    else {
      element.innerHTML = 'Calculate'
    }
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
      this.loading('median')
      this.metrologicalService.calculateMedian(factor).subscribe({
        next: (res) => {
          result!.innerHTML = res
          this.loading('median')
        },
        error: (err) => {
          this.loading('median')
          console.log(err)
        }
      })
    }
  }

  calculateMode() {
    let factor = this.modeForm.get('mode')?.value
    let result = document.getElementById('mode-result')
    if (this.modeForm.valid) {
      this.loading('mode')
      this.metrologicalService.calculateMode(factor).subscribe({
        next: (res) => {
          result!.innerHTML = res
          this.loading('mode')
        },
        error: (err) => {
          this.loading('mode')
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
      this.loading('avg')
      this.metrologicalService.calculateAvgByDateRange({
        factor: this.avgForm.get('mean')?.value,
        dateRange: this.formatDateRange(startDate, endDate)
      }).subscribe({
        next: (res) => {
          result!.innerHTML = res
          this.loading('avg')
        },
        error: (err) => {
          this.loading('avg')
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

  loadCorrelationMatrix() {
    const requests = [];

    for (let i = 0; i < this.factors.length; i++) {
      for (let j = 0; j < this.factors.length; j++) {
        const factor1 = this.factors[i];
        const factor2 = this.factors[j];

        const request = this.metrologicalService.getCorrelation(`${factor1}And${factor2}`).pipe(
          map(res => parseFloat(res)),
          catchError(err => {
            return of(1);
          })
        );

        requests.push(request);
      }
    }

    forkJoin(requests).subscribe(data => {
      let index = 0;
      for (let i = 0; i < this.factors.length; i++) {
        const row = [];
        for (let j = 0; j < this.factors.length; j++) {
          row.push(data[index]);
          index++;
        }
        this.correlationMatrix.push(row);
      }
    });
  }

}
