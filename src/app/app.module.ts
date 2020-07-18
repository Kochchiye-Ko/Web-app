import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { environment } from '../environments/environment';
import { AuthService } from "../app/auth.service";
//import { AddnotificationComponent } from './pages/addnotification/addnotification.component';

import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
// import { NgbdTimepickerBasic } from './ngx-material-timepicker'
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './pages/home/contactus/contact/contact.component';
import { TrainsheduleComponent } from './pages/home/tainShedule/trainshedule/trainshedule.component';
import { MapComponent } from './pages/home/map/map/map.component';
import { HomeComponent } from './pages/home/home/home/home.component';

import { AmazingTimePickerModule } from 'amazing-time-picker';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    AmazingTimePickerModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, ContactComponent, TrainsheduleComponent, MapComponent, HomeComponent,],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }