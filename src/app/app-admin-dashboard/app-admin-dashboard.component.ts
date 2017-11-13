import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {RouterNamesService} from "../router-names.service";

@Component({
  selector: 'app-app-admin-dashboard',
  templateUrl: './app-admin-dashboard.component.html',
  styleUrls: ['./app-admin-dashboard.component.css']
})
export class AppAdminDashboardComponent implements OnInit {

  private chartData: Array<any>;

  constructor(private routeNames: RouterNamesService) {
    routeNames.title.next('Dashboard');
  }

  ngOnInit() {
    setTimeout(() => {
      this.generateData();
      // change the data periodically
      setInterval(() => this.generateData(), 3000);		    }, 1000);
  }

  generateData(){
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([		        `Index ${i}`, Math.floor(Math.random() * 100)		      ]);
    }
  }

}
