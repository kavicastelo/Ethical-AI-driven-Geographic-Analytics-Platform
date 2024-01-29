import {Component, OnInit} from '@angular/core';
import {AirQualityService} from "../../../../services/air-quality.service";

@Component({
  selector: 'app-pm25',
  templateUrl: './pm25.component.html',
  styleUrls: ['./pm25.component.scss']
})
export class Pm25Component implements OnInit{

  airQuality: any

  constructor(private airQualityService: AirQualityService) {
  }

  ngOnInit(): void {
    this.loadAllAirQuality()
  }

  loadAllAirQuality(){
    this.airQualityService.getAllAirQuality().subscribe(res => {
      if(res){
        res.splice(0, 1);
        return this.airQuality = res;
      }
    })
  }

}
