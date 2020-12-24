import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonSkeletonPageRoutingModule } from './ion-skeleton-routing.module';

import { IonSkeletonPage } from './ion-skeleton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonSkeletonPageRoutingModule
  ],
  declarations: [IonSkeletonPage]
})
export class IonSkeletonPageModule {}
