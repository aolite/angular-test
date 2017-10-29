import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppMainPageComponent} from "../app-main-page/app-main-page.component";
import {AppHomeComponent} from "../app-home/app-home.component";
import {AppRegisterComponent} from "../app-register/app-register.component";
import {AppAdminUsersComponent} from "../app-admin-users/app-admin-users.component";
import {AppAdminUserDetailComponent} from "../app-admin-user-detail/app-admin-user-detail.component";
import {AppAdminTopicsComponent} from "../app-admin-topics/app-admin-topics.component";
import {AppAdminTopicsDetailComponent} from "../app-admin-topics-detail/app-admin-topics-detail.component";
import {AppAdminTopicsAddComponent} from "../app-admin-topics-add/app-admin-topics-add.component";

const appRoutes: Routes = [
  { path: 'minerva',        component: AppMainPageComponent },
  { path: 'register',        component:  AppRegisterComponent},
  { path: 'home',        component:  AppHomeComponent},
  { path: 'admin/users',        component:  AppAdminUsersComponent},
  { path: 'admin/topics',        component:  AppAdminTopicsComponent},
  { path: 'admin/users/detail/:id',        component:  AppAdminUserDetailComponent},
  { path: 'admin/topics/detail/:id',        component:  AppAdminTopicsDetailComponent},
  { path: 'admin/topics/add',        component:  AppAdminTopicsAddComponent},
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
