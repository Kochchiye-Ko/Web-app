import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/auth.service';
import { Notification } from '../../models/notifications';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

//export let browserRefresh = false;

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {
  // staticAlertClosed = false;
  // staticAlertClosed1 = false;
  // staticAlertClosed2 = false;
  // staticAlertClosed3 = false;
  // staticAlertClosed4 = false;
  // staticAlertClosed5 = false;
  // staticAlertClosed6 = false;
  // staticAlertClosed7 = false;

 // subscription: Subscription;
  notifications: Notification[];
  addNot: Notification = {
    author: '',
    dateTime: '',
    message: ' ',
    subject: ' ',

  }



  constructor(private notService: AuthService, private toster: ToastrService, private router: Router) {

   


  }


  // constructor(private toastr: ToastrService) {}

  // showNotification(from, align){

  //     const color = Math.floor((Math.random() * 5) + 1);

  //     switch(color){
  //       case 1:
  //       this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
  //          disableTimeOut: true,
  //          closeButton: true,
  //          enableHtml: true,
  //          toastClass: "alert alert-info alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //       break;
  //       case 2:
  //       this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
  //          disableTimeOut: true,
  //          closeButton: true,
  //          enableHtml: true,
  //          toastClass: "alert alert-success alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //       break;
  //       case 3:
  //       this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
  //          disableTimeOut: true,
  //          closeButton: true,
  //          enableHtml: true,
  //          toastClass: "alert alert-warning alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //       break;
  //       case 4:
  //       this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
  //          disableTimeOut: true,
  //          enableHtml: true,
  //          closeButton: true,
  //          toastClass: "alert alert-danger alert-with-icon",
  //          positionClass: 'toast-' + from + '-' +  align
  //        });
  //        break;
  //        case 5:
  //        this.toastr.show('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
  //           disableTimeOut: true,
  //           closeButton: true,
  //           enableHtml: true,
  //           toastClass: "alert alert-primary alert-with-icon",
  //           positionClass: 'toast-' + from + '-' +  align
  //         });
  //       break;
  //       default:
  //       break;
  //     }
  // }

  ngOnInit() {
    this.notService.getNotifications().subscribe(notifications => {
    this.notifications = notifications;
    });
  }



  onSubmit(form: NgForm) {
    let data = Object.assign({dateTime: Date.now()}, form.value);
      console.log(form.value);
    // if (this.addNot.subject != '' && this.addNot.message != '') {
    //   this.notService.addNotification(this.addNot);
    //   this.toster.success("Sent message successfully");
    // }
    this.notService.addNotification(data);
      this.toster.success("Sent message successfully");
      
   
  }






}


