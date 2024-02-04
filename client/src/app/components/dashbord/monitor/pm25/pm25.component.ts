import {Component, OnInit} from '@angular/core';
import {AirQualityService} from "../../../../services/air-quality.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-pm25',
  templateUrl: './pm25.component.html',
  styleUrls: ['./pm25.component.scss']
})
export class Pm25Component implements OnInit{

  airQuality: any
  isExpanded: boolean = false
  isLoading: boolean = true

  filterForm = new FormGroup({
    filter: new FormControl(null)
  })

  locations = ['All', 'Colombo', 'Galle', 'Matara', 'Hambantota']

  constructor(private airQualityService: AirQualityService) {
  }

  ngOnInit(): void {
    this.loadLatestAirQuality()
  }

  loadLatestAirQuality(){
    this.airQualityService.getAllAirQuality().subscribe(res => {
      this.isLoading = false
      if(res){
        let filteredLast10Values = res.slice(-10);
        res.splice(0, 1);
        return this.airQuality = filteredLast10Values;
      }
    })
  }

  loadAllAirQuality(){
    this.airQualityService.getAllAirQuality().subscribe(res => {
      if(res){
        return this.airQuality = res;
      }
    })
  }

  seeMore() {
    this.isExpanded = !this.isExpanded
    if (this.isExpanded) {
      this.loadAllAirQuality()
    }
    else {
      this.loadLatestAirQuality()
    }
  }

  filterByLocation() {
    let location = this.filterForm.controls['filter'].value
    this.airQualityService.getAllAirQuality().subscribe(res => {
      if (res){
        let filteredColomboValues = res.filter((a: any) => a.location === location);
        if (filteredColomboValues.length === 0) {
          this.loadLatestAirQuality()
        }
        return this.airQuality = filteredColomboValues;
      }
      else {
        this.loadLatestAirQuality()
      }
    })
  }

  filterValue() {
    this.filterByLocation()
  }
}
