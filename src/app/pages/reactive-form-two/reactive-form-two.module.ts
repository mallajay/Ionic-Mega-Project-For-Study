import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ReactiveFormTwoPageRoutingModule } from "./reactive-form-two-routing.module";

import { ReactiveFormTwoPage } from "./reactive-form-two.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ReactiveFormTwoPageRoutingModule
  ],
  declarations: [ReactiveFormTwoPage]
})
export class ReactiveFormTwoPageModule {}
