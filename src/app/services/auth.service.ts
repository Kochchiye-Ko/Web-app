import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState: any = null;

  constructor(private afu: AngularFireAuth, private router: Router) {
    this.afu.authState.subscribe((auth => {
      this.authState = auth;
    }))
  }

  //all firebase getdata functions

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    }
    else {
      return false
    }
  }

  registerWithEmail(email: string, password: string) {
    return this.afu.auth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.authState = user
    }).catch(error => {
      console.log(error)
      throw error
    })

  }

  public loginWithEmail(email: string, password: string) {
    return this.afu.auth.signInWithEmailAndPassword(email, password).then((user) => {
      this.authState = user
    }).catch(error => {
      console.log(error)
      throw error
    })

  }

  signout(): void {
    this.afu.auth.signOut();
    this.router.navigate(['/login']);
  }
}

