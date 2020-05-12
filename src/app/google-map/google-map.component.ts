import { Component, OnInit } from '@angular/core';
import { TrainService } from '../services/train.service';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat: number;
  lng: number;


  constructor(private TrainService: TrainService) {

  }
  ngOnInit() {
    this.TrainService.getTrains().subscribe(GetTrain => {
      console.log(GetTrain);
    });
    this.getTrainLocation()
  }

  private getTrainLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
  }


}
