import { Component, OnInit } from "@angular/core";
import { AdminService } from '../../admin.service';
import { Users } from '../../models/users';
import { NgForm } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject, combineLatest } from 'rxjs';



@Component({
  selector: "app-typography",
  templateUrl: "about.component.html"
})
export class AboutComponent implements OnInit {

  users: Users[];
  userToEdit: Users;
  editState: boolean = false;
  userslist: Users;
  ID: String;
  PHONENO: String;

  searchSctram: String;
  startAt = new Subject();
  endAt = new Subject();
  startObs = this.startAt.asObservable();
  endObs = this.endAt.asObservable();
  pno;

 
 
 
  constructor(private authservice:AdminService,private toster: ToastrService) {}

  ngOnInit() {
    this.authservice.getUsers().subscribe(usersx => {
      this.users = usersx;
   
    }),
    this.resetForm();
    combineLatest(this.startObs, this.endObs).subscribe((value) => {
      this.authservice.firequery(value[0], value[1]).subscribe((phoneno) => {
        this.pno = phoneno;
      })
    })

  }

  onEdit(users: Users) {
    this.userToEdit = Object.assign({}, users)
    this.ID = this.userToEdit.id;
    this.PHONENO = this.userToEdit.phoneno;
  }

  onsubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    this.authservice.updateUsers(data, this.ID);
    this.toster.success("Successfully updated", "" + this.PHONENO);
  }

  onDelete(id: String) {
    if ((confirm("Are you sure to delete this user?"))) {
      this.authservice.onDelete(id);
      this.toster.error("Successfully deleted");
      this.resetForm();

    }
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
      accountType:null

    }
  }

  search($event) {
    let word = $event.target.value;
    this.startAt.next(word);
    this.endAt.next(word + "\uf8ff")
  }


   
  }

