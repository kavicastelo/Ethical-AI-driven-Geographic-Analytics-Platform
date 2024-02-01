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
  }

  predict() {

  }
}
