import { Component, OnInit } from "@angular/core";
import { Subject, combineLatest } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { TrainDetails } from 'src/app/models/traindetails';
import { TrainsheduleService } from 'src/app/services/trainshedule.service';

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
  constructor(private TrainsheduleService: TrainsheduleService) {

  }

  ngOnInit() {
    this.TrainsheduleService.getUTraindetails().subscribe(td => {
      this.trainDetails = td;
      console.log(td)
    }),
      combineLatest(this.tdstartObs, this.tdendObs).subscribe((value) => {
        this.TrainsheduleService.firequerytraindetils(value[0], value[1]).subscribe((traind) => {
          this.trainD = traind;
          console.log(traind)
        })
      }),
      combineLatest(this.tdstartObs2, this.tdendObs2).subscribe((value) => {
        this.TrainsheduleService.firequerytraindetilsbyNumber(value[0], value[1]).subscribe((traind) => {
          this.trainD = traind;
          console.log(traind)
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

}
