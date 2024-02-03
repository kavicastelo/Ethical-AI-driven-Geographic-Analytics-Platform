import {Component, OnInit} from '@angular/core';
import {MetrologicalService} from "../../../../services/metrological.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Chart} from "chart.js";

@Component({
  selector: 'app-graphs-metro',
  templateUrl: './graphs-metro.component.html',
  styleUrls: ['./graphs-metro.component.scss']
})
export class GraphsMetroComponent implements OnInit {
  metroData: any;
  factors: any[] = ['temperature', 'humidity', 'windSpeed', 'precipitation'];
  labels: any[] = [];
  data: any[] = [];
  chartCanvas: any;

  filterForm: any = new FormGroup({
    factor: new FormControl(null, [Validators.required]),
    size: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required])
  })

  constructor(private metrologicalService: MetrologicalService) {
  }
  ngOnInit(): void {
    this.getAllMetrological();
  }

  getAllMetrological() {
    const size = parseInt(this.filterForm.value.size);
    const selectedFactor = this.filterForm.value.factor;
    const type = this.filterForm.value.type;

    if (this.filterForm.valid) {
      this.metrologicalService.getAllMetrological().subscribe(res => {
        if (res) {
          this.metroData = res.slice(-size);

          this.labels = this.metroData.map((item:any) => item.location);

          switch (selectedFactor) {
            case 'temperature':
              this.data = this.metroData.map((item:any) => item.temperature);
              break;
            case 'humidity':
              this.data = this.metroData.map((item:any) => item.humidity);
              break;
            case 'windSpeed':
              this.data = this.metroData.map((item:any) => item.windSpeed);
              break;
            case 'precipitation':
              this.data = this.metroData.map((item:any) => item.precipitation);
              break;
            default:
              // Handle other factors if needed
          }
          this.renderChart(selectedFactor, type);
        }
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
      this.getAllMetrological();
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
