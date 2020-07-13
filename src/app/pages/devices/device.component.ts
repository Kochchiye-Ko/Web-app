import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/auth.service';
import { TrainDetails } from 'src/app/models/traindetails';
import { Device } from 'src/app/models/device';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-icons",
  templateUrl: "device.component.html"
})
export class DeviceComponent implements OnInit {


  trainDetails: TrainDetails[];
  deviceData: Device;

  constructor(private authservice: AuthService, private toster: ToastrService) { }

  ngOnInit() {
    this.authservice.getUTraindetails().subscribe(td => {
      this.trainDetails = td;
      // console.log(td)
    })
    this.resetForm();
  }

  onsubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    this.authservice.adddevice(data);
    this.toster.success("Successfully Added.");
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.deviceData = {
      id: null,
      deviceid: null,
      activestates: null,
      assignedtrain: null,
    }
  }
}
