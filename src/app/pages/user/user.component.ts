import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/auth.service';
import { Users } from '../../models/users';
import { NgForm } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})

export class UserComponent implements OnInit {

  users: Users[];
  userToEdit: Users;
  editState: boolean = false;
  userslist: Users;
  ID: String;

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.authservice.getUsers().subscribe(usersx => {
      // console.log(users);
      this.users = usersx;
    }),
      this.resetForm();
  }

  onEdit(users: Users) {
    this.userToEdit = Object.assign({}, users)
    this.ID = this.userToEdit.id;
  }

  onsubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    this.authservice.updateUsers(data, this.ID);
  }

  onDelete(id: String) {
    if ((confirm("Are you sure to delete this user?"))) {
      this.authservice.onDelete(id);
    }
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.userToEdit = {
    }
  }

}
