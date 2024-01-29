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

  filterForm = new FormGroup({
    filter: new FormControl(null)
  })

  constructor(private airQualityService: AirQualityService) {
  }

  ngOnInit(): void {
    this.loadLatestAirQuality()
  }

  loadLatestAirQuality(){
    this.airQualityService.getAllAirQuality().subscribe(res => {
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

  filterByLocation(location: string) {
    this.airQualityService.getAllAirQuality().subscribe(res => {
      if (res){
        let filteredColomboValues = res.filter((a: any) => a.location === location);
        return this.airQuality = filteredColomboValues;
      }
    })
  }

  filterValue(value: string) {
    switch (value) {
      case 'All':
        this.loadLatestAirQuality();
        break;
      case 'Colombo':
        this.filterByLocation('Colombo');
        break;
      case 'Galle':
        this.filterByLocation('Galle');
        break;
      case 'Matara':
        this.filterByLocation('Matara');
        break;
      case 'Hambantota':
        this.filterByLocation('Hambantota');
        break;
      default:
        this.loadLatestAirQuality();
        break;
    }
  }
}
