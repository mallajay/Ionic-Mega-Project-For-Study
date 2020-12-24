import { Component, OnInit, ViewChild } from "@angular/core";
import { IonicSelectableComponent } from "ionic-selectable";

@Component({
  selector: "app-searchable-select",
  templateUrl: "./searchable-select.page.html",
  styleUrls: ["./searchable-select.page.scss"],
})
export class SearchableSelectPage implements OnInit {
  users = [
    {
      id: 0,
      name: "Ajay Mall",
      country: "India",
    },
    {
      id: 1,
      name: "Akash Mall",
      country: "England",
    },
    {
      id: 2,
      name: "Rajan Mall",
      country: "USA",
    },
  ];

  groups = [
    {
      name: "Angular",
      id: 0,
      type: "Framework",
    },
    {
      name: "React",
      id: 1,
      type: "Framework",
    },
    {
      name: "JaveScript",
      id: 3,
      type: "Language",
    },
    {
      name: "Swift",
      id: 4,
      type: "Language",
    },
  ];

  selected_users = null;
  selected = [];
  toggle = true;

  group = null;

  @ViewChild("selectComponent", { static: true })
  selectComponent: IonicSelectableComponent;

  constructor() {}

  openFormCode() {
    this.selectComponent.open();
  }

  ngOnInit() {}

  clear() {
    this.selectComponent.clear();
    this.selectComponent.close();
  }

  toggleItem() {
    this.selectComponent.toggleItems(this.toggle);
    this.toggle = !this.toggle;
  }

  confirm() {
    this.selectComponent.confirm();
    this.selectComponent.close();
  }

  portChange(event: { component: IonicSelectableComponent; value: any }) {
    let port = event.value;
    console.log("port", port);
  }
}
