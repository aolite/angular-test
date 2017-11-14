import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import {MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';

import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppAlertComponent } from './app-alert/app-alert.component';
import {AlertService} from './alert-service.service';
import {AuthenticationService} from './authentication.service';
import {UserService} from './user.service';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppRegisterComponent } from './app-register/app-register.component';
import { AppAdminUsersComponent } from './app-admin-users/app-admin-users.component';
import { AppAdminUserDetailComponent } from './app-admin-user-detail/app-admin-user-detail.component';
import { AppAdminTopicsComponent } from './app-admin-topics/app-admin-topics.component';
import {TopicService} from './topic.service';
import { AppAdminTopicsDetailComponent } from './app-admin-topics-detail/app-admin-topics-detail.component';
import { AppAdminTopicsAddComponent } from './app-admin-topics-add/app-admin-topics-add.component';
import { AppAdminDatasetsComponent } from './app-admin-datasets/app-admin-datasets.component';
import {DatasetService} from './dataset.service';
import { AppAddDatasetComponent } from './app-add-dataset/app-add-dataset.component';
import { AppAdminDashboardComponent } from './app-admin-dashboard/app-admin-dashboard.component';
import {RouterNamesService} from './router-names.service';
import { BarChartComponent } from './bar-chart/bar-chart.component';

import { AgmCoreModule } from '@agm/core';
import { MapChartComponent } from './map-chart/map-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    AppMainPageComponent,
    AppFooterComponent,
    AppLoginComponent,
    AppAlertComponent,
    AppHomeComponent,
    AppRegisterComponent,
    AppAdminUsersComponent,
    AppAdminUserDetailComponent,
    AppAdminTopicsComponent,
    AppAdminTopicsDetailComponent,
    AppAdminTopicsAddComponent,
    AppAdminDatasetsComponent,
    AppAddDatasetComponent,
    AppAdminDashboardComponent,
    BarChartComponent,
    MapChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCBk6HjCDq0PQnoFtpeYGdxzWngkDen_so'
    })
  ],
  entryComponents: [AppLoginComponent],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
    TopicService,
    DatasetService,
    RouterNamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
