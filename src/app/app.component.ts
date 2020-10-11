import { Component } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';
import { NavigationStart, Router } from "@angular/router";
import { Subscription } from "rxjs";


export let browserRefresh = false;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Koochchiya ko";
  subscription : Subscription;


  constructor(db: AngularFirestore,private router: Router) { 
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
    })
   }

  onDestroy(){
    this.subscription .unsubscribe();
  }
  
}
