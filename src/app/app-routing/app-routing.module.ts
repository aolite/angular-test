import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppMainPageComponent} from "../app-main-page/app-main-page.component";
import {AppLoginComponent} from "../app-login/app-login.component";

const appRoutes: Routes = [
  { path: 'minerva',        component: AppMainPageComponent },
  { path: 'login',        component:  AppLoginComponent},
  { path: '',   redirectTo: 'minerva', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
