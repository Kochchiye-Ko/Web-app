import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Users } from './models/users'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userCollection: AngularFirestoreCollection<Users>;
  users: Observable<Users[]>;

  constructor(public afs: AngularFirestore) {
    this.users = this.afs.collection("UserTB").valueChanges();

  }

  getUsers() {
    return this.users;
  }
}
