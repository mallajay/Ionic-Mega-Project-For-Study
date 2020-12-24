import { Component, OnInit, ViewChild } from "@angular/core";
import { Item, IonicStorageService } from "./ionic-storage.service";
import { IonList, Platform, ToastController } from "@ionic/angular";

@Component({
  selector: "app-ionic-storage",
  templateUrl: "./ionic-storage.page.html",
  styleUrls: ["./ionic-storage.page.scss"],
})
export class IonicStoragePage implements OnInit {
  items: Item[] = [];

  newItem: Item = <Item>{};

  @ViewChild("mylist", { static: false }) mylist: IonList;

  constructor(
    private platform: Platform,
    private storageService: IonicStorageService,
    private toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.loadItems();
    });
  }

  ngOnInit() {}

  // Create
  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.storageService.addItem(this.newItem).then((item) => {
      this.newItem = <Item>{};
      this.showToast("Item added!");
      this.loadItems();
    });
  }

  loadItems() {
    this.storageService.getItems().then((items) => {
      this.items = items;
    });
  }

  updateItem(item: Item) {
    item.title = `UPDATED: ${item.title}`;
    item.modified = Date.now();
    this.storageService.updateItem(item).then((item) => {
      this.showToast("Item Updated!");
      this.mylist.closeSlidingItems();
      this.loadItems();
    });
  }

  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then((item) => {
      this.showToast("Item Removed!");
      this.mylist.closeSlidingItems();
      this.loadItems();
    });
  }

  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      // showCloseButton: true,
      position: this.platform.is("desktop") ? "top" : "bottom",
    });
    toast.present();
  }
}
