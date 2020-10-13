import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/auth.service";
import { Messages } from "../../../../models/messages";
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  messages: Messages[];
  addmessages: Messages ={
    name: ' ',
    email: ' ',
    message: ' ',
  };

  constructor(private msgService: AuthService,private toster: ToastrService) { }

  ngOnInit(){
    this.resetForm();
  //   this.msgService.().subscribe(notifications => {
  //     this.messages = notifications;
   
  // })
}
  // onSubmit(){
  //   if (this.addmessages.name != '' && this.addmessages.email != '') {
  //     this.msgService.addMessages(this.addmessages);
  //     this.addmessages.name= '';
  //     this.addmessages.email='';
  //     this.addmessages.message = '';
  //     this.toster.success("Sent message successfully", "" + this.addmessages.name);
  //   }
 // }
  onsubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    console.log(form.value);  
    this.msgService.addMessages(data);
    this.toster.success("Sent message successfully");
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.addmessages = {
      name: null,
      email:null,
      message: null
     }

    }}
