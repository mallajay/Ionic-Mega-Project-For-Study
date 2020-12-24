import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsVsEventApiPage } from './rxjs-vs-event-api.page';

const routes: Routes = [
  {
    path: '',
    component: RxjsVsEventApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsVsEventApiPageRoutingModule {}
