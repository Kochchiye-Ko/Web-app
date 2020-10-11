import { Component, OnInit } from '@angular/core';
import { browserRefresh } from "../../../../app.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public browserRefresh: boolean;

  constructor() { }

  ngOnInit(): void {

    this.browserRefresh = browserRefresh;
  }

}
