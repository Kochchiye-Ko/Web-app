import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/home/home/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/home/contactus/contact/contact.component';
import { TrainsheduleComponent } from "./pages/home/tainShedule/trainshedule/trainshedule.component";

const routes: Routes = [
 {
    path:'',
    redirectTo: "home",
    pathMatch: 'full'
    },
    {
      path: 'home',
      component:HomeComponent
    },
    {
      path:"trainschedule",
      component: TrainsheduleComponent
    },
    {
      path: "contact",
      component: ContactComponent

  },

  {
    path: "",
    component:DashboardComponent
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      }
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: "**",
    redirectTo: "home"
  }
 ];

@NgModule({
  imports: [
    // CommonModule,
    // BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
