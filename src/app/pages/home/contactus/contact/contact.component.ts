import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/auth.service";
import { Messages } from "../../../../models/messages";
import { ToastrService } from 'ngx-toastr';


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
   
  }

  onSubmit(){
    if (this.addmessages.name != '' && this.addmessages.email != '') {
      this.msgService.addMessages(this.addmessages);
      this.addmessages.name= '';
      this.addmessages.email='';
      this.addmessages.message = '';
      this.toster.success("Sent message successfully", "" + this.addmessages.name);
    }
  }

}
