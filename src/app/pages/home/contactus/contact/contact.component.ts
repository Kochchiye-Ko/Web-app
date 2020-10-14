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
  // addmessages: Messages = {
  //   id: '',
  //   name: ' ',
  //   email: ' ',
  //   message: ' ',
  //   dateTime: ' ',
  // };
  addmessages: Messages;

  constructor(private msgService: AuthService, private toster: ToastrService) { }

  ngOnInit() {
    this.resetForm();

  }
  // onSubmit(){
  //   if (this.addmessages.name != '' && this.addmessages.email != '') {
  //     this.msgService.addMessages(this.addmessages);
  //     this.addmessages.name= '';
  //     this.addmessages.email='';
  //     this.addmessages.message = '';
  //     this.addmessages.dateTime = '';
  //     this.toster.success("Sent message successfully", "" + this.addmessages.name);
  //   }
  // }


  onSubmit(form: NgForm) {
    
    let data = Object.assign({dateTime: Date.now().toString(),}, form.value)  
    this.msgService.addMessages(data);
    this.toster.success("Sent message successfully");
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.addmessages = {
      id: null,
      name: null,
      email: null,
      message: null,
      dateTime: null,
    }
  }

  //}

}


