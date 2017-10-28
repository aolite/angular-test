import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppLoginComponent} from "../app-login/app-login.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  private sectionScroll = null;
  private model: any = {};

  constructor(private router:Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.doScroll();
    this.sectionScroll= null;
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
      data: { name: this.model.username, animal: this.model.password }
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

}
