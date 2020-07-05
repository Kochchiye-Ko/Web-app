import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
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

  updateUsers(data){
    this.afs.doc('UserTB/'+data.id).update(data)
  }

}
