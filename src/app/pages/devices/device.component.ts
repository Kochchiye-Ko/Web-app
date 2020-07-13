import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/auth.service';
import { TrainDetails } from 'src/app/models/traindetails';
import { Device } from 'src/app/models/device';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject, combineLatest } from 'rxjs';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: "app-icons",
  templateUrl: "device.component.html"
})
export class DeviceComponent implements OnInit {


  trainDetails: TrainDetails[];
  deviceData: Device;

  searchSctram: String;
  startAt = new Subject();
  endAt = new Subject();
  startObs = this.startAt.asObservable();
  endObs = this.endAt.asObservable();
  device;

  constructor(private authservice: AuthService, private deviceservice: DeviceService, private toster: ToastrService) { }

  ngOnInit() {
    this.authservice.getUTraindetails().subscribe(td => {
      this.trainDetails = td;
    })
    this.resetForm();
    combineLatest(this.startObs, this.endObs).subscribe((value) => {
      this.deviceservice.firequery(value[0], value[1]).subscribe((device) => {
        this.device = device;
      })
    })
  }

  onEdit(dv: Device) {

  }

  onDelete(id: String) {
    if ((confirm("Are you sure to delete this user?"))) {
      this.deviceservice.onDelete(id);
      this.toster.error("Successfully deleted");
      this.resetForm();
    }
  }

  onsubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    this.deviceservice.adddevice(data);
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
  search($event) {
    let word = $event.target.value;
    this.startAt.next(word);
    this.endAt.next(word + "\uf8ff")
  }

}
