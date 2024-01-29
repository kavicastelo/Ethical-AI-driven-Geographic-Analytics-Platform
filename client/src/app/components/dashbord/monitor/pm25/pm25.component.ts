import {Component, OnInit} from '@angular/core';
import {AirQualityService} from "../../../../services/air-quality.service";

@Component({
  selector: 'app-pm25',
  templateUrl: './pm25.component.html',
  styleUrls: ['./pm25.component.scss']
})
export class Pm25Component implements OnInit{

  airQuality: any
  isExpanded: boolean = false

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
}
