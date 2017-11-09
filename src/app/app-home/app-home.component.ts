import { Component, OnInit } from '@angular/core';
import {User} from "../../datamodel/User";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  currentUser: User;

  constructor(private authenticationService: AuthenticationService,
    private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!this.currentUser){
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
