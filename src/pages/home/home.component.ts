import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  ngAfterViewInit() {
    Chart.register(...registerables);

    // Function to generate different shades of a base color
    const generateShades = (baseColor: string, count: number) => {
      const colors = [];
      for (let i = 0; i < count; i++) {
        const opacity = 0.3 + 0.7 * (i / (count - 1)); // from 0.3 to 1
        colors.push(baseColor.replace('OPACITY', opacity.toString()));
      }
      return colors;
    };

    // First bar chart (Sales)
    new Chart('myBarChart1', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2],
          backgroundColor: generateShades('rgba(255, 99, 132, OPACITY)', 5)
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true }
        }
      }
    });

    // Second bar chart (Expenses)
    new Chart('myBarChart2', {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          label: 'Expenses',
          data: [8, 15, 10, 6, 3],
          backgroundColor: generateShades('rgba(54, 162, 235, OPACITY)', 5)
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true }
        }
      }
    });
  }
}
