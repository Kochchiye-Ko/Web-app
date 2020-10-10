import { Component, OnInit } from "@angular/core";
import { Subject, combineLatest } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { TrainDetails } from 'src/app/models/traindetails';
import { TrainsheduleService } from 'src/app/services/trainshedule.service';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { TShedule } from 'src/app/models/trainshedule';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


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

  TrainToEdit1: TrainDetails;
  ID: String;



  constructor(private TrainsheduleService: TrainsheduleService, private atp: AmazingTimePickerModule, private toster: ToastrService) {

  }

  ngOnInit() {

    this.resetForm();
    this.resetForm2();

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

  searchtrains($event1) {
    let word = $event1.target.value;
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
    this.ID = this.TrainToEdit.id;
  }

  clear() {
    this.resetForm();
  }
  clear2() {
    this.resetForm2();
  }
  resetForm2(form2?: NgForm) {
    if (form2 != null)
      form2.resetForm();
    this.TrainToEdit1 = {
      id: null,
      dailyOrweekend: null,
      endStaion: null,
      startStaion: null,
      trainName: null,
      trainNumber: null,
      trainType: null,

    }
  }

  onsubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    this.TrainsheduleService.updateTrains(data, this.ID);
    console.log(this.ID);
    this.toster.success("Successfully updated");
  }

  onDelete(id: String) {
    if ((confirm("Are you sure to delete this user?"))) {
      this.TrainsheduleService.onDelete(this.ID);
      this.toster.error("Successfully deleted");
      this.resetForm2();
    }
  }

  onAddNewTrain(form: NgForm) {
    let data = Object.assign({}, form.value);
    this.TrainsheduleService.addNewTrain(data);
    this.toster.success("Successfully Added.");
    this.resetForm2();
  }



}
