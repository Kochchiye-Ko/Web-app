import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { TrainDetails } from '../models/traindetails';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TShedule } from '../models/trainshedule';

@Injectable({
  providedIn: 'root'
})
export class TrainsheduleService {

  TrainDetailsCollection: AngularFirestoreCollection<TrainDetails>
  traindetails: Observable<TrainDetails[]>

  stationsCollection: AngularFirestoreCollection<TShedule>
  stationdetails: Observable<TShedule[]>
  userDoc: AngularFirestoreDocument<TrainDetails>

  constructor(public afs: AngularFirestore) {
    this.traindetails = this.afs.collection('TrainDetails').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data2 = a.payload.doc.data() as TrainDetails;
        data2.id = a.payload.doc.id;
        return data2;
      });
    }));
    this.stationdetails = this.afs.collection('stations').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data2 = a.payload.doc.data() as TShedule;
        data2.id = a.payload.doc.id;
        return data2;
      });
    }));
  }

  getstaion() {
    return this.stationdetails;
  }

  firequerytraindetils(start, end) {
    return this.afs.collection('TrainDetails', ref => ref.orderBy("trainName", "asc").startAt(start).endAt(end)).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as TrainDetails;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  getUTraindetails() {
    return this.traindetails;
  }

  firequerytraindetilsbyNumber(start, end) {
    return this.afs.collection('TrainDetails', ref => ref.orderBy("trainNumber", "asc").startAt(start).endAt(end)).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as TrainDetails;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  onDelete(id: String) {
    this.userDoc = this.afs.doc(`TrainDetails/${id}`)
    this.userDoc.delete();
    console.log(id)
  }



}
