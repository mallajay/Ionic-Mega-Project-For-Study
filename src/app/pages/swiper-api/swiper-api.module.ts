import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwiperApiPageRoutingModule } from './swiper-api-routing.module';

import { SwiperApiPage } from './swiper-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperApiPageRoutingModule
  ],
  declarations: [SwiperApiPage]
})
export class SwiperApiPageModule {}
