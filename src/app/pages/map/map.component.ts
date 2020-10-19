import { Component, OnInit } from "@angular/core";
import { Train } from '../../models/train';
import { TrainserviceService } from 'src/app/services/trainservice.service';

declare const google: any;


@Component({
  selector: "app-map",
  templateUrl: "map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {



  // trains: Train[];
  // lat: number;
  // lng: number;
  // lastOpen: any;

  // iconme = {
  //   url: 'https://img.icons8.com/color/48/000000/street-view.png',
  //   scaledSize: {
  //     width: 30,
  //     height: 30
  //   }
  // }


  // icontrain = {
  //   url: 'https://img.icons8.com/ios-filled/26/000000/train.png',
  //   scaledSize: {
  //     width: 30,
  //     height: 30
  //   }
  // }
  constructor(private TrainService: TrainserviceService) { }

  ngOnInit() {
    document.location.href = 'http://localhost:4300/maps';

    // this.TrainService.getTrains().subscribe(trains => {
    //   this.trains = trains;
    // });
    // this.getTrainLocation()
  }

  // private getTrainLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.lat = position.coords.latitude;
  //       this.lng = position.coords.longitude;
  //     });
  //   }
  // }

  // onMouseOver(infoWindow, $event: MouseEvent) {
  //   infoWindow.open();
  // }

  // onMouseOut(infoWindow, $event: MouseEvent) {
  //   infoWindow.close();
  // }

}
