import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccordianPage } from './accordian.page';

const routes: Routes = [
  {
    path: '',
    component: AccordianPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccordianPageRoutingModule {}
