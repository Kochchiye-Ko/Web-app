import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/auth.service';
import { Notification } from '../../models/notifications';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from "@angular/common";
import { NgForm } from '@angular/forms';

//export let browserRefresh = false;

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {


  notifications: Notification[];
  addNot: Notification;

  constructor(private notService: AuthService, private toster: ToastrService) {
  }



  ngOnInit() {
    this.resetForm();
    this.notService.getNotifications().subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  onsubmit(form: NgForm) {
    let data = Object.assign({dateTime: Date.now().toString(), author: "admin" }, form.value);
    console.log(form.value);  
    this.notService.addNotification(data);
    this.toster.success("Sent message successfully");
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.addNot = {
      id: null,
      subject: null,
      message: null,
      dateTime: null,
    }
  }

}

