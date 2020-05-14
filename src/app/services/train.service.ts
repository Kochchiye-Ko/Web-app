import { Injectable, Query } from '@angular/core';
import { Observable, from } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Train } from '../google-map/model/train';
import { map } from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  TrainsCollection: AngularFirestoreCollection<Train>;
  Trains: Observable<Train[]>;


  constructor(public afs: AngularFirestore ) {
    // this.Trains = this.afs.collection('trainlocations').valueChanges();
    this.Trains = this.afs.collection('trainlocations').snapshotChanges().pipe(map(changes => {

      return changes.map(a => {
        const data = a.payload.doc.data() as Train;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

  }

  getTrains() {
    return this.Trains;
  }
}


