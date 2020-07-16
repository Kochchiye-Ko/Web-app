import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { TrainDetails } from '../models/traindetails';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainsheduleService {
  TrainDetailsCollection: AngularFirestoreCollection<TrainDetails>
  traindetails: Observable<TrainDetails[]>
  constructor(public afs: AngularFirestore) {
    this.traindetails = this.afs.collection('TrainDetails').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data2 = a.payload.doc.data() as TrainDetails;
        data2.id = a.payload.doc.id;
        return data2;
      });
    }));
  }


  firequerytraindetils(start, end) {
    return this.afs.collection('TrainDetails', ref => ref.orderBy("trainName", "asc").startAt(start).endAt(end)).valueChanges();
  }
  getUTraindetails() {
    return this.traindetails;
  }

  firequerytraindetilsbyNumber(start, end) {
    return this.afs.collection('TrainDetails', ref => ref.orderBy("trainNumber", "asc").startAt(start).endAt(end)).valueChanges();
  }
}
