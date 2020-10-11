import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { DeviceComponent } from "../../pages/devices/device.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TrainsComponent } from "../../pages/trains/trains.component";
import { AboutComponent } from "../../pages/userprof/userprof.component";
import { LostitemComponent } from "../../pages/lostitems/lostitem/lostitem.component"
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TrainsComponent,
    DeviceComponent,
    AboutComponent,
    // LostitemComponent,
    NotificationsComponent,
    MapComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule { }
