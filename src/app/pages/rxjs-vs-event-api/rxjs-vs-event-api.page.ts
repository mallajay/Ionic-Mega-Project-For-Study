import { RxjsVsEventApiService } from "./rxjs-vs-event-api.service";
import { Component, OnInit } from "@angular/core";
import { ToastController, Platform } from "@ionic/angular";

@Component({
  selector: "app-rxjs-vs-event-api",
  templateUrl: "./rxjs-vs-event-api.page.html",
  styleUrls: ["./rxjs-vs-event-api.page.scss"],
})
export class RxjsVsEventApiPage implements OnInit {
  count = 0;

  constructor(
    private RxjsVsEventApiService: RxjsVsEventApiService,
    private toastController: ToastController,
    private platform: Platform
  ) {
    this.RxjsVsEventApiService.getCountObeservale().subscribe((res) => {
      console.log("New Value", res);
      this.count = res;
    });
  }

  ngOnInit() {}

  incerase() {
    this.RxjsVsEventApiService.increseProduct();
    this.showToast("Incresed");
  }

  decrease() {
    this.RxjsVsEventApiService.decreasProduct();
    this.showToast("Decreased");
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: this.platform.is("desktop") ? "top" : "bottom",
    });
    toast.present();
  }
}
