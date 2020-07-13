import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Users } from './models/users'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { Notification } from './models/notifications';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userCollection: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;
  userDoc: AngularFirestoreDocument<Users>
  notificaitonsCollection: AngularFirestoreCollection<Notification>
  notifications: Observable<Notification[]>


  constructor(public afs: AngularFirestore) {
    // this.users = this.afs.collection("UserTB").valueChanges();
    this.users = this.afs.collection('UserTB').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Users;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    //this.notifications = this.afs.collection('Notification').valueChanges();
    this.notificaitonsCollection = this.afs.collection('Notification' , ref => ref.orderBy('dateTime' , 'asc'));
    this.notifications =this.notificaitonsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Notification;
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
  getNotifications() {
    return this.notifications;
  }

  addNotification (addNot: Notification) {
    this.notificaitonsCollection.add(addNot);
  }



  firequery(start, end) {
    return this.afs.collection('UserTB', ref => ref.orderBy("phoneno").startAt(start).endAt(end)).valueChanges();
  }
 
}
