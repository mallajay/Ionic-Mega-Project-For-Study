import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ReactiveFormPageRoutingModule } from "./reactive-form-routing.module";

import { ReactiveFormPage } from "./reactive-form.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ReactiveFormPageRoutingModule
  ],
  declarations: [ReactiveFormPage]
})
export class ReactiveFormPageModule {}
