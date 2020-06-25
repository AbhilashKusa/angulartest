import { Chart } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../shared/firestore services/item.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(public itemservice: ItemService) {}
  cart=[] ;
  ngOnInit(): void {
    this.itemservice.getItems().subscribe((car) => {
      let acc = car.map((acc) => acc.Acceleration);
      let displacement = car.map((dis) => dis.Displacement);
      let Name = car.map((de) =>de.Name )
      let acc1=[]
      let dis1=[]
      let Names=[]
      Names.push(Name)
      acc1.push(acc)
      dis1.push(displacement)
      console.log(acc);
      console.log(displacement);

      this.cart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: acc,
          datasets: [
            {
              data: acc,
              borderColor: '#3cba9f',
              fill: false,
            },
            {
              data: displacement,
              borderColor: '#ffcc00',
              fill: false,
            },
          ],
        },
         options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
      });
    });
  }
}
