import { Component, OnInit } from '@angular/core';
import {RouterNamesService} from "../router-names.service";

@Component({
  selector: 'app-app-admin-dashboard',
  templateUrl: './app-admin-dashboard.component.html',
  styleUrls: ['./app-admin-dashboard.component.css']
})
export class AppAdminDashboardComponent implements OnInit {

  constructor(private routeNames: RouterNamesService) {
    routeNames.title.next('Dashboard');
  }

  ngOnInit() {
  }

}
