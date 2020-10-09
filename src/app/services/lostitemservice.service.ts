import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LostItems } from '../models/lostItem';

@Injectable({
  providedIn: 'root'
})
export class LostitemserviceService {

  lostItems: Observable<LostItems[]>
  userDoc: AngularFirestoreDocument<LostItems>

  constructor(public afs: AngularFirestore) {
    this.lostItems = this.afs.collection('Lostitems').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data2 = a.payload.doc.data() as LostItems;
        data2.id = a.payload.doc.id;
        return data2;
      });
    }));
  }

  getLostItems() {
    return this.lostItems;
  }

  onDelete(id: String) {
    this.userDoc = this.afs.doc(`Lostitems/${id}`)
    this.userDoc.delete();
    console.log(id)
  }

}
