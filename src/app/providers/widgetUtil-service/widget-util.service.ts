import { Injectable } from "@angular/core";
import {
  PopoverController,
  ToastController,
  Platform,
  LoadingController,
  AlertController
} from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class WidgetUtilService {
  loading: any = {};

  constructor(
    private toastController: ToastController,
    private platform: Platform,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private popoverController: PopoverController
  ) {}

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      // showCloseButton: true,
      position: this.platform.is("desktop") ? "top" : "bottom"
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: "Please wait...",
      translucent: true
    });
    return await this.loading.present();
  }

  async dismissLoader() {
    await this.loading.dismiss();
  }

  async presentAlertConfirm(header, message, buttons) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons
    });
    await alert.present();
  }

  async presentPopover(ev: any, component) {
    const popover = await this.popoverController.create({
      component: component,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  async dismissPopover() {
    await this.popoverController.dismiss();
  }
}
