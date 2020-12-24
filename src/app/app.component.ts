import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: "Home",
      url: "/home",
      icon: "home",
    },
    {
      title: "1.Ionic-storage",
      url: "/ionic-storage",
      icon: "cloud",
    },
    {
      title: "2.Rxjs-vs-Ionic Event-api",
      url: "/rxjs-vs-event-api",
      icon: "git-compare",
    },
    {
      title: "3.Searchable-Select",
      url: "/searchable-select",
      icon: "search",
    },
    {
      title: "4.Ion-Skeleton",
      url: "/ion-skeleton",
      icon: "skull",
    },
    {
      title: "5.Zoom-Image",
      url: "/image",
      icon: "image",
    },
    {
      title: "6.Dynamic Reactive Form",
      url: "/reactive-form",
      icon: "information",
    },
    {
      title: "7.Simple Dynamic Reactive Form",
      url: "/reactive-form-two",
      icon: "information",
    },
    {
      title: "8.Bar Rating Component",
      url: "/rating",
      icon: "star",
    },
    {
      title: "9.Swiper Api",
      url: "/swiper-api",
      icon: "swap-horizontal",
    },
    {
      title: "10.Accordian List",
      url: "/accordian",
      icon: "chevron-forward",
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {}
}
