import { Component, OnInit } from "@angular/core";
import { Subject, combineLatest } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { TrainDetails } from 'src/app/models/traindetails';
import { TrainsheduleService } from 'src/app/services/trainshedule.service';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { TShedule } from 'src/app/models/trainshedule';
import { NgForm } from '@angular/forms';


@Component({
  selector: "ngbd-timepicker-basic",
  templateUrl: "trains.component.html"
})


export class TrainsComponent implements OnInit {

  searchSctram2: String;
  tdstartAt = new Subject();
  tdendAt = new Subject();
  tdstartObs = this.tdstartAt.asObservable();
  tdendObs = this.tdendAt.asObservable();
  trainD;

  searchSctram3: String;
  tdstartAt2 = new Subject();
  tdendAt2 = new Subject();
  tdstartObs2 = this.tdstartAt2.asObservable();
  tdendObs2 = this.tdendAt2.asObservable();
  trainD2;

  trainDetails: TrainDetails[];
  stationDetails: TShedule[];

  TrainToEdit: TrainDetails;
  activeSyageButton: boolean;

  constructor(private TrainsheduleService: TrainsheduleService, private atp: AmazingTimePickerModule) {

  }

  ngOnInit() {

    this.resetForm();

    this.TrainsheduleService.getstaion().subscribe(stationDetails => {
      this.stationDetails = stationDetails;

      this.stationDetails.forEach(element => {
        console.log(element.stlist[0])
      });
      // console.log(stationDetails)
    });

    this.TrainsheduleService.getUTraindetails().subscribe(td => {
      this.trainDetails = td;
    }),
      combineLatest(this.tdstartObs, this.tdendObs).subscribe((value) => {
        this.TrainsheduleService.firequerytraindetils(value[0], value[1]).subscribe((traind) => {
          this.trainD = traind;
        })
      }),
      combineLatest(this.tdstartObs2, this.tdendObs2).subscribe((value) => {
        this.TrainsheduleService.firequerytraindetilsbyNumber(value[0], value[1]).subscribe((traind) => {
          this.trainD = traind;
        })
      })
  }

  searchtrains($event) {
    let word = $event.target.value;
    this.tdstartAt.next(word);
    this.tdendAt.next(word + "\uf8ff")
  }
  searchtrains2($event) {
    let word = $event.target.value;
    this.tdstartAt2.next(word);
    this.tdendAt2.next(word + "\uf8ff")
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.TrainToEdit = {
      id: null,
      dailyOrweekend: null,
      endStaion: null,
      startStaion: null,
      trainName: null,
      trainNumber: null,
      trainType: null,

    }
  }

  onEdit(trains: TrainDetails) {
    this.TrainToEdit = Object.assign({}, trains)
    console.log(this.TrainToEdit.endTime);
    // this.ID = this.userToEdit.id;
    // this.PHONENO = this.userToEdit.phoneno;
  }

  clear() {
    this.resetForm();
    this.activeSyageButton = false;
  }

  onsubmit(form) {
    if (this.activeSyageButton != false) {
      console.log("onsubmit")
    }
  }





}
