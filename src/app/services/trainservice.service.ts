import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Train } from '../models/train';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainserviceService {
  TrainsCollection: AngularFirestoreCollection<Train>;
  Trains: Observable<Train[]>;

  constructor(public afs: AngularFirestore) {
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
