import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/admin.service';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  users: Users[];
  userToEdit: Users;

  ID: String;
  PHONENO: String;

  constructor(private adminservice: AdminService, private toster: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.adminservice.getUsers().subscribe(usersx => {
      this.users = usersx;
    })
  }

  onEdit(users: Users) {
    this.userToEdit = Object.assign({}, users)
    this.ID = this.userToEdit.id;
    this.PHONENO = this.userToEdit.phoneno;
  }

  onsubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    this.adminservice.updateUsers(data, this.ID);
    this.toster.success("Successfully updated", "" + this.PHONENO);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.userToEdit = {
      id: null,
      phoneno: null,
      firstname: null,
      lastname: null,
      email: null,
      accountType: null

    }
  }



}

