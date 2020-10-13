import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { APP_BASE_HREF } from '@angular/common';


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
import { AdminService } from "../app/admin.service";
//import { AddnotificationComponent } from './pages/addnotification/addnotification.component';

//  import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
// import { NgbdTimepickerBasic } from './ngx-material-timepicker'
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './pages/home/contactus/contact/contact.component';
import { TrainsheduleComponent } from './pages/home/tainShedule/trainshedule/trainshedule.component';
import { MapComponent } from './pages/home/map/map/map.component';
import { HomeComponent } from './pages/home/home/home/home.component';
import { HomeNavComponent } from './pages/home/home/home-nav/home-nav.component';
import { HomefooterComponent } from './pages/home/home/homefooter/homefooter.component';

import { LostitemComponent } from './pages/lostitems/lostitem/lostitem.component';
import { RegisterComponent } from './pages/home/register/register/register.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './pages/home/login/login/login.component';

export const firebaseconfig = environment.firebaseConfig;

@NgModule({
  imports: [

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,

    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseconfig, 'angularfs'),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, ContactComponent, TrainsheduleComponent, MapComponent, HomeComponent, HomeNavComponent, HomefooterComponent, LostitemComponent, LoginComponent, RegisterComponent,],
  providers: [AuthService, { provide: APP_BASE_HREF, useValue: '/' }],

  bootstrap: [AppComponent]
})
export class AppModule { }