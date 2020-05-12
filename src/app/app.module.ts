import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';

import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { TrainService } from './services/train.service';
export const firebaseconfig = environment.firebaseConfig;
import {AngularFirestoreModule} from 'angularfire2/firestore';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseconfig,'angularfs'),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [TrainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
