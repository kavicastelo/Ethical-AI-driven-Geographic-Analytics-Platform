import {Component, OnInit} from '@angular/core';
import {AirQualityService} from "../../../../services/air-quality.service";
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graphs-air',
  templateUrl: './graphs-air.component.html',
  styleUrls: ['./graphs-air.component.scss']
})
export class GraphsAirComponent implements OnInit {
  airQuality: any;
  labels: any[] = [];
  data: any[] = [];

  constructor(private airQualityService: AirQualityService) {
  }
  ngOnInit(): void {
    this.getAllAirQuality();
  }

  getAllAirQuality() {
    this.airQualityService.getAllAirQuality().subscribe(res => {
      if (res) {
        this.airQuality = res.slice(-30);

        for (let i = 0; i < this.airQuality.length; i++) {
          this.labels.push(this.airQuality[i].location);
          this.data.push(this.airQuality[i].co2);
        }

        this.renderChart(this.labels, this.data, 'Co2');
      }
    }, error => {
      console.log(error);
    })
  }

  renderChart(labeldata:any,maindata:any, factor:any) {
    const myChart = new Chart("chart", {
      type: 'bar',
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

}
