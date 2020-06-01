import { Component, ElementRef } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "black-dashboard-angular";
  //title = 'homepage';
  name = 'set iframe source';
  url: string = "https://angular.io/api/router/RouterLink";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer,private elementRef: ElementRef) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
 }

}
