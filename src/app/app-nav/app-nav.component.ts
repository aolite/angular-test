import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  private sectionScroll = null;

  constructor(private router:Router) { }

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

  internalRoute(url:any):void{

    this.sectionScroll= url;
    this.router.navigate(['/minerva' ], {fragment: url});
    this.doScroll();
  }

}
