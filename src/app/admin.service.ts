import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Users } from './models/users'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //adminCollection: AngularFirestoreCollection<Users>;
  Admin: Observable<Users[]>;
  adminDoc: AngularFirestoreDocument<Users>
 
 
  constructor(public afs: AngularFirestore) { 

      this.Admin = this.afs.collection('UserTB', ref => ref.where("accountType","==", "admin") ).snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Users;
          data.id = a.payload.doc.id;
          return data;
        });
      }));

    
  
}

  getUsers() {
    return this.Admin;
  }

  updateUsers(data: Users, ID: String) {
    this.adminDoc = this.afs.doc(`UserTB/${ID}`)
    this.adminDoc.update(data);
  }

  onDelete(id: String) {
    this.adminDoc = this.afs.doc(`UserTB/${id}`)
    this.adminDoc.delete();
  }

   firequery(start, end) {
    return this.afs.collection('UserTB', ref => ref.orderBy("phoneno").startAt(start).endAt(end)).valueChanges();
  }
}
