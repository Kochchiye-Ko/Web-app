import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Messages } from 'src/app/models/messages';
import { AuthService } from 'src/app/auth.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Messages[];

  constructor(private msgService: AuthService, private toster: ToastrService) { }

  ngOnInit(): void {
    this.msgService.getMessages().subscribe(messages => {
      this.messages = messages;
    })

  }
}
