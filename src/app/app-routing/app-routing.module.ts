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
import {AppAdminDatasetsComponent} from "../app-admin-datasets/app-admin-datasets.component";
import {AppAddDatasetComponent} from "../app-add-dataset/app-add-dataset.component";
import {AppAdminDashboardComponent} from "../app-admin-dashboard/app-admin-dashboard.component";

const appRoutes: Routes = [
  { path: 'minerva',        component: AppMainPageComponent },
  { path: 'register',        component:  AppRegisterComponent},
  { path: 'home',
    component:  AppHomeComponent,
    children: [
      { path: 'topics',        component:  AppAdminTopicsComponent},
      { path: 'dashboard', component:  AppAdminDashboardComponent},
      { path: 'datasets',        component:  AppAdminDatasetsComponent},
      { path: 'dataset/add',        component:  AppAddDatasetComponent},
      { path: 'users',              component: AppAdminUsersComponent},
      { path: 'users/detail/:id',        component:  AppAdminUserDetailComponent},
      { path: 'topics/detail/:id',        component:  AppAdminTopicsDetailComponent},
      { path: 'topics/add',        component:  AppAdminTopicsAddComponent}
    ]
  },
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
