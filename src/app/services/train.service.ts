import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Train } from '../google-map/model/train';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  TrainsCollection: AngularFirestoreCollection<Train>;
  Trains: Observable<Train[]>;

  constructor(public afs: AngularFirestore) {
    this.Trains = this.afs.collection('UserTB').valueChanges();
  }

  getTrains() {
    return this.Trains;
  }
}


