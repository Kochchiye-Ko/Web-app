import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  videoUrl: string = "/assets/background.mp4";
  fileToUpload: File = null;

  constructor() { 
   
  }

  ngOnInit() {
  }
handleFileInput(file: FileList){
  this.fileToUpload = file.item(0);

  var reader = new FileReader();
  reader.onload = (event:any) => {
    this.videoUrl = event.target.result;

  }
  reader.readAsDataURL(this.fileToUpload);
}
}
