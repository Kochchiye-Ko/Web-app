import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';

import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
export const firebaseconfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
