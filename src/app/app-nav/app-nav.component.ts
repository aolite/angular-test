import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AppLoginComponent} from "../app-login/app-login.component";
import {MatDialog} from "@angular/material";
import {User} from "../../datamodel/User";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  private sectionScroll = null;
  private   currentUser: User;

  constructor(private authenticationService: AuthenticationService,
              private router:Router,
              public dialog: MatDialog) {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    authenticationService.getLoggedInName.subscribe(name => {
      if (name){
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      }else{
        this.currentUser = null;
      }
    });

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.doScroll();
      this.sectionScroll= null;
    });
  }

  doScroll() {

    if (!this.sectionScroll) {
      return;
    }
    try {
      var elements = document.getElementById(this.sectionScroll);

      elements.scrollIntoView();
    }
    finally{
      this.sectionScroll = null;
    }
  }


  goToRoute(url:any):void{
    this.router.navigate([url]);
  }

  loginDialog():void{

    let dialogRef = this.dialog.open(AppLoginComponent, {
      width: '250px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  internalRoute(url:any):void{

    this.sectionScroll= url;
    this.router.navigate(['/minerva' ], {fragment: url});
    this.doScroll();
  }

  logout (){
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  register(){
    this.router.navigate(['/register']);
  }

}
