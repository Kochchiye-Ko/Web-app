import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/auth.service';
import { Notification } from '../../models/notifications';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from "@angular/common";
import { NavigationStart, Router } from "@angular/router";
import { Subscription } from "rxjs";

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

    // this.subscription = router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     browserRefresh = !router.navigated;
    //   }
    // })



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
      //console.log(notifications);
      this.notifications = notifications;
    });
  }



  onSubmit() {
    if (this.addNot.subject != '' && this.addNot.message != '') {
      this.notService.addNotification(this.addNot);
      this.addNot.author = '';
      this.addNot.dateTime = '';
      this.addNot.message = '';
      this.addNot.subject = '';
      this.toster.success("Sent message successfully", "" + this.addNot.author);
    }
  }



}

// onDestroy(){
//   this.subscription .unsubscribe();
// }



