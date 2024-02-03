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
  factors: any[] = ['pm25', 'pm10', 'co2', 'ozone', 'no2'];
  labels: any[] = [];
  data: any[] = [];
  chartCanvas: any;

  filterForm: any = new FormGroup({
    factor: new FormControl(null, [Validators.required]),
    size: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required])
  });

  constructor(private airQualityService: AirQualityService) {
  }
  ngOnInit(): void {
    this.getAllAirQuality();
  }

  getAllAirQuality() {
    const size = parseInt(this.filterForm.value.size);
    const selectedFactor = this.filterForm.value.factor;
    const type = this.filterForm.value.type;

    if (this.filterForm.valid) {
      this.airQualityService.getAllAirQuality().subscribe(res => {
        if (res) {
          this.airQuality = res.slice(-size);

          this.labels = this.airQuality.map((item:any) => item.location);

          switch (selectedFactor) {
            case 'pm25':
              this.data = this.airQuality.map((item:any) => item.pm25);
              break;
            case 'pm10':
              this.data = this.airQuality.map((item:any) => item.pm10);
              break;
            case 'co2':
              this.data = this.airQuality.map((item:any) => item.co2);
              break;
            case 'ozone':
              this.data = this.airQuality.map((item:any) => item.ozone);
              break;
            case 'no2':
              this.data = this.airQuality.map((item:any) => item.no2);
              break;
            default:
              // Handle other factors if needed
              break;
          }

          this.renderChart(selectedFactor, type);
        }
      }, error => {
        console.log(error);
      });
    }
  }

  renderChart(factor: any, chartType: any) {
    if (this.chartCanvas) {
      this.chartCanvas.data.labels = this.labels;
      this.chartCanvas.data.datasets[0].data = this.data;
      this.chartCanvas.data.datasets[0].label = factor;
      this.chartCanvas.config.type = chartType;
      this.chartCanvas.update();
    } else {
      this.chartCanvas = new Chart("chart", {
        type: chartType,
        data: {
          labels: this.labels,
          datasets: [{
            label: factor,
            data: this.data,
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

  updateChart() {
    if (this.filterForm.valid) {
      this.getAllAirQuality();
    }
  }

  changeFactor() {
    this.updateChart();
  }

  changeSize() {
    this.updateChart();
  }

  changeType() {
    this.updateChart();
  }
}
