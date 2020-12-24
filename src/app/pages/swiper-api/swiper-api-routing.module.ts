import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwiperApiPage } from './swiper-api.page';

const routes: Routes = [
  {
    path: '',
    component: SwiperApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwiperApiPageRoutingModule {}
