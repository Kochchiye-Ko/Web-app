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

  DeviceToEdit: Device;
  ID: String;
  DEVICEID: String;

  constructor(private authservice: AuthService, private deviceservice: DeviceService, private toster: ToastrService) { }

  ngOnInit() {
    this.authservice.getUTraindetails().subscribe(td => {
      this.trainDetails = td;
    })
    this.resetForm();
    this.resetForm2();
    combineLatest(this.startObs, this.endObs).subscribe((value) => {
      this.deviceservice.firequery(value[0], value[1]).subscribe((device) => {
        this.device = device;
      })
    })
  }

  onEdit(dv: Device) {
    this.DeviceToEdit = Object.assign({}, dv)
    this.ID = this.DeviceToEdit.id;
    this.DEVICEID = this.DeviceToEdit.deviceid;
    // console.log(this.DeviceToEdit)
  }

  onDelete(id: String) {
    if ((confirm("Are you sure to delete this user?"))) {
      this.deviceservice.onDelete(id);
      this.toster.error("Successfully deleted");
      this.resetForm();
    }
  }

  onsubmit(form: NgForm) {
    let data = Object.assign({ activestates: "offline" }, form.value);
    this.deviceservice.adddevice(data);
    this.toster.success("Successfully Added.");
    this.resetForm();
  }

  onsubmitactORdect(form: NgForm) {
    if (form.value.activestates == "online") {
      let data = Object.assign({ activestates: "offline" }, form.value);
      this.deviceservice.adddevice(data);
      this.toster.success("Activated");
      // this.resetForm();
    } else {
      let data = Object.assign({ activestates: "online" }, form.value);
      this.deviceservice.adddevice(data);
      this.toster.success("Dectivated");
    }

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

  resetForm2(form2?: NgForm) {
    if (form2 != null)
      form2.resetForm();
    this.DeviceToEdit = {
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
