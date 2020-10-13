import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { DeviceComponent } from "../../pages/devices/device.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TrainsComponent } from "../../pages/trains/trains.component";

import { AboutComponent } from "../../pages/userprof/userprof.component";
import { LostitemComponent } from "../../pages/lostitems/lostitem/lostitem.component"
import { HomeComponent } from 'src/app/pages/home/home/home/home.component';
import { LoginComponent } from 'src/app/pages/home/login/login/login.component';
import { RegisterComponent } from 'src/app/pages/home/register/register/register.component';
import { UserprofileComponent } from 'src/app/pages/userprofile/userprofile/userprofile.component';

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent, },
  { path: "devices", component: DeviceComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "trains", component: TrainsComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "userprofile", component: UserprofileComponent },
  { path: "register", component: RegisterComponent },
  { path: "lostItem", component: LostitemComponent },
];
