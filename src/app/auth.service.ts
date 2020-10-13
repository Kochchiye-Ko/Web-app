import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Users } from './models/users'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notification } from './models/notifications';
import { Messages } from './models/messages';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //User----------------------------------------------------------------------
  userCollection: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;
  userDoc: AngularFirestoreDocument<Users>

  // notification -------------------------------------------------------------
  notificaitonsCollection: AngularFirestoreCollection<Notification>
  notifications: Observable<Notification[]>

  //contact us ---------------------------------------------------------

  messageCollection: AngularFirestoreCollection<Messages>
  messages: Observable<Messages[]>

//Users----------------------------------------------------------------------------------

  constructor(public afs: AngularFirestore) {

    this.users = this.afs.collection('UserTB').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Users;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

    //Notifications..........................................................................

    this.notificaitonsCollection = this.afs.collection('Notification', ref => ref.orderBy('dateTime', 'desc'));
    this.notifications = this.notificaitonsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Notification;
        data.id = a.payload.doc.id;
        return data;
      });
    }));

  } 

  //users-----------------------------------------

  getUsers() {
    return this.users;
  }

  updateUsers(data: Users, ID: String) {
    this.userDoc = this.afs.doc(`UserTB/${ID}`)
    this.userDoc.update(data);
    // console.log(ID)
  }

  onDelete(id: String) {
    this.userDoc = this.afs.doc(`UserTB/${id}`)
    this.userDoc.delete();
    console.log(id)
  }

  firequery(start, end) {
    return this.afs.collection('UserTB', ref => ref.orderBy("phoneno").startAt(start).endAt(end)).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Users;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
 


  //notifications-----------------------------------------
  getNotifications() {
    return this.notifications;
  }
  //-----------------------------------------notifications//

  addNotification(data: Notification) {
    this.afs.collection(`Notification`).add(data);
  }


  //trainD-----------------------------------------

  firequerytraindetils(start, end) {
    return this.afs.collection('TrainDetails', ref => ref.orderBy("trainName", "asc").startAt(start).endAt(end)).valueChanges();
  }

  //Meaasages ------------------------------------------------------

  addMessages(addmessages: Messages) {

    this.afs.collection(`Messages`).add(addmessages);
  }

}
