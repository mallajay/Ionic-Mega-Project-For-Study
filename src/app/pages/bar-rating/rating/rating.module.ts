import { RatingComponentComponent } from "../rating-component/rating-component.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RatingPageRoutingModule } from "./rating-routing.module";

import { RatingPage } from "./rating.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RatingPageRoutingModule],
  declarations: [RatingPage, RatingComponentComponent]
})
export class RatingPageModule {}
