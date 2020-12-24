import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ion-skeleton",
  templateUrl: "./ion-skeleton.page.html",
  styleUrls: ["./ion-skeleton.page.scss"]
})
export class IonSkeletonPage implements OnInit {
  contentLoaded = false;

  constructor() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 3000);
  }

  ngOnInit() {}
}
