import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/auth.service';
import { Users } from '../../models/users';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})

export class UserComponent implements OnInit {

  users: Users[];
  userToEdit: Users;
  editState: boolean = false;

  phonenumberHTML : String;
  firstnameHTML : String;
  lastnameHTML : String;
  emailHTML : String;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.authservice.getUsers().subscribe(usersx => {
      // console.log(users);
      this.users = usersx;
    })
  }

  editAccount(event, users) {
    this.editState = true;
    this.userToEdit = users;
    this.phonenumberHTML=users.phoneno
    this.firstnameHTML=users.firstname
    this.lastnameHTML=users.lastname
    this.emailHTML=users.email
  }

}
