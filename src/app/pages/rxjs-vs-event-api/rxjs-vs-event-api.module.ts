import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RxjsVsEventApiPageRoutingModule } from './rxjs-vs-event-api-routing.module';

import { RxjsVsEventApiPage } from './rxjs-vs-event-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RxjsVsEventApiPageRoutingModule
  ],
  declarations: [RxjsVsEventApiPage]
})
export class RxjsVsEventApiPageModule {}
