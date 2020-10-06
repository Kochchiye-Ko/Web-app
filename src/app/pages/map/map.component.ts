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



constructor(private TrainService: TrainserviceService) { }

ngOnInit() {
}




}
