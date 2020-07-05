import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/auth.service';
import { Users } from '../../models/users';
import { NgForm } from '@angular/forms';
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "user.component.html"
})

export class UserComponent implements OnInit {

  users: Users[];
  userToEdit: Users;
  editState: boolean = false;
  userslist: Users;

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
  }

  onSubmit(ss: string) {
    // let data = Object.assign({}, form.value);
    // this.authservice.updateUsers(data);
    console.log(ss);

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.userToEdit = {

    }
  }

}
