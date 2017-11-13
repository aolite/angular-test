import { Component, OnInit } from '@angular/core';
import {User} from "../../datamodel/User";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";
import {RouterNamesService} from "../router-names.service";

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  pageTitle: string;
  currentUser: User;

  constructor(private authenticationService: AuthenticationService,
    private router: Router, private routeNames: RouterNamesService) {
    this.routeNames.title.subscribe(n => this.pageTitle = n as string);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!this.currentUser) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    if (!this.currentUser){
      this.router.navigate(['/']);
    }
  }

  logout (){
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

}
