import {Component, OnInit} from '@angular/core';
import {MetrologicalService} from "../../../../services/metrological.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {
  metrological: any
  isExpanded: boolean = false
  isLoading: boolean = true

  filterForm = new FormGroup({
    filter: new FormControl(null)
  })

  constructor(private metrologicalService: MetrologicalService) {
  }
  ngOnInit(): void {
    this.loadLatestMetrological()
  }

  loadLatestMetrological(){
    this.metrologicalService.getAllMetrological().subscribe(res => {
      this.isLoading = false
      if(res){
        let filteredLast10Values = res.slice(-10);
        res.splice(0, 1);
        return this.metrological = filteredLast10Values;
      }
    })
  }

  loadAllMetrological(){
    this.metrologicalService.getAllMetrological().subscribe(res => {
      if(res){
        return this.metrological = res;
      }
    })
  }

  seeMore() {
    this.isExpanded = !this.isExpanded
    if (this.isExpanded) {
      this.loadAllMetrological()
    }
    else {
      this.loadLatestMetrological()
    }
  }

  filterByLocation(location: string) {
    this.metrologicalService.getAllMetrological().subscribe(res => {
      if (res){
        let filteredColomboValues = res.filter((a: any) => a.location === location);
        return this.metrological = filteredColomboValues;
      }
    })
  }

  filterValue(value: string){
    switch (value) {
      case 'All':
        this.loadLatestMetrological();
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
        this.loadLatestMetrological()
        break;
    }
  }

}
