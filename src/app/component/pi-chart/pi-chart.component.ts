import { Component, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(PieController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-pi-chart',
  templateUrl: './pi-chart.component.html',
  styleUrls: ['./pi-chart.component.css']
})
export class PiChartComponent implements AfterViewInit {
  @Input() chartData: number[] = [60, 40]; // Default values
  @Input() chartLabels: string[] = ['Used', 'Free'];
  @Input() chartColors: string[] = ['#0d6efd', '#e9ecef'];

  @ViewChild('pieCanvas') pieCanvas!: ElementRef;

  ngAfterViewInit(): void {
    new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: this.chartLabels,
        datasets: [{
          data: this.chartData,
          backgroundColor: this.chartColors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}
