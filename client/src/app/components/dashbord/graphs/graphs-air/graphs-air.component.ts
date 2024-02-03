import {Component, OnInit} from '@angular/core';
import {AirQualityService} from "../../../../services/air-quality.service";
import {Chart, registerables} from 'chart.js';
import {FormControl, FormGroup, Validators} from "@angular/forms";
Chart.register(...registerables);

@Component({
  selector: 'app-graphs-air',
  templateUrl: './graphs-air.component.html',
  styleUrls: ['./graphs-air.component.scss']
})
export class GraphsAirComponent implements OnInit {
  airQuality: any;
  factors: any[] = [
    'pm25',
    'pm10',
    'co2',
    'ozone',
    'no2',
  ];
  labels: any[] = [];
  data: any[] = [];

  filterForm: any = new FormGroup(
    {
      factor: new FormControl(null,[
        Validators.required
      ]),
      size: new FormControl(null,[
        Validators.required
      ]),
      type: new FormControl(null,[
        Validators.required
      ])
    }
  );

  constructor(private airQualityService: AirQualityService) {
  }
  ngOnInit(): void {
    this.getAllAirQuality();
  }

  getAllAirQuality() {
    if (this.filterForm.valid){
      this.airQualityService.getAllAirQuality().subscribe(res => {
        if (res) {
          let size = parseInt(this.filterForm.value.size);
          let selectedFactor = this.filterForm.value.factor;
          let type = this.filterForm.value.type;

          this.airQuality = res.slice(-size);

          for (let i = 0; i < this.airQuality.length; i++) {
            this.labels.push(this.airQuality[i].location);
            switch (selectedFactor) {
              case 'pm25':
                this.data.push(this.airQuality[i].pm25);
                break;
              case 'pm10':
                this.data.push(this.airQuality[i].pm10);
                break;
              case 'co2':
                this.data.push(this.airQuality[i].co2);
                break;
              case 'ozone':
                this.data.push(this.airQuality[i].ozone);
                break;
              case 'no2':
                this.data.push(this.airQuality[i].no2);
                break;
              default:
                this.data.push(this.airQuality[i].$selectedFactor);
                break;
            }
          }

          this.renderChart(this.labels, this.data, selectedFactor,type);
        }
      }, error => {
        console.log(error);
      })
    }
    else{

    }
  }

  renderChart(labeldata:any,maindata:any, factor:any, chartType:any) {
    const myChart = new Chart("chart", {
      type: chartType,
      data: {
        labels: labeldata,
        datasets: [{
          label: factor,
          data: maindata,
          backgroundColor: "blue",
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  changeFactor() {
    this.getAllAirQuality()
  }

  changeSize() {
    this.getAllAirQuality()
  }

  changeType() {
    this.getAllAirQuality()
  }
}
