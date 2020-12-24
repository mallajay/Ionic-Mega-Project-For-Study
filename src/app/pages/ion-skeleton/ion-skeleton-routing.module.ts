import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonSkeletonPage } from './ion-skeleton.page';

const routes: Routes = [
  {
    path: '',
    component: IonSkeletonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonSkeletonPageRoutingModule {}
