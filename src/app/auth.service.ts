import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Users } from './models/users'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userCollection: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;
  userDoc: AngularFirestoreDocument<Users>

  constructor(public afs: AngularFirestore) {
    // this.users = this.afs.collection("UserTB").valueChanges();
    this.users = this.afs.collection('UserTB').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Users;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

  }

  getUsers() {
    return this.users;
  }

  updateUsers(data: Users, ID: String) {
    this.userDoc = this.afs.doc(`UserTB/${ID}`)
    this.userDoc.update(data);
  }

  onDelete(id: String) {
    this.userDoc = this.afs.doc(`UserTB/${id}`)
    this.userDoc.delete();
  }

}
