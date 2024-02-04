import {Component, OnInit} from '@angular/core';
import {MetrologicalService} from "../../../../services/metrological.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-wind-speed',
  templateUrl: './wind-speed.component.html',
  styleUrls: ['./wind-speed.component.scss']
})
export class WindSpeedComponent implements OnInit {
  metrological: any
  isExpanded: boolean = false
  isLoading: boolean = true

  filterForm = new FormGroup({
    filter: new FormControl(null)
  })

  locations = ['All', 'Industrial', 'Residential', 'Commercial', 'Park']

  constructor(private metrologicalService: MetrologicalService) {
  }

  ngOnInit(): void {
    this.loadLatestMetrological()
  }

  loadLatestMetrological() {
    this.metrologicalService.getAllMetrological().subscribe(res => {
      this.isLoading = false
      if (res) {
        let filteredLast10Values = res.slice(-10);
        res.splice(0, 1);
        return this.metrological = filteredLast10Values;
      }
    })
  }

  loadAllMetrological() {
    this.metrologicalService.getAllMetrological().subscribe(res => {
      if (res) {
        return this.metrological = res;
      }
    })
  }

  seeMore() {
    this.isExpanded = !this.isExpanded
    if (this.isExpanded) {
      this.loadAllMetrological()
    } else {
      this.loadLatestMetrological()
    }
  }

  filterByLocation() {
    let location = this.filterForm.controls['filter'].value
    this.metrologicalService.getAllMetrological().subscribe(res => {
      if (res) {
        let filteredColomboValues = res.filter((a: any) => a.location === location);
        if (filteredColomboValues.length === 0) {
          this.loadLatestMetrological()
        }
        return this.metrological = filteredColomboValues;
      }
      else {
        this.loadLatestMetrological()
      }
    })
  }

  filterValue() {
    this.filterByLocation()
  }

}
