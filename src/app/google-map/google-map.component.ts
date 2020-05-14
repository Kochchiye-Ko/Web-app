import { Component, OnInit } from '@angular/core';
import { TrainService } from '../services/train.service';
import { Train } from './model/train';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  trains: Train[];
  lat: number;
  lng: number;
  
  iconme = {
    url: 'https://img.icons8.com/color/48/000000/street-view.png',
    scaledSize: {
      width: 30,
      height: 30
    }
  }
  
  
  icontrain = {
    url: 'https://img.icons8.com/ios-filled/26/000000/train.png',
    scaledSize: {
      width: 30,
      height: 30
    }
  }
  constructor(private TrainService: TrainService) { }

  ngOnInit() {
    this.TrainService.getTrains().subscribe(trains => {
      this.trains = trains;
    });
    this.getTrainLocation()
  }

  private getTrainLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }


}
