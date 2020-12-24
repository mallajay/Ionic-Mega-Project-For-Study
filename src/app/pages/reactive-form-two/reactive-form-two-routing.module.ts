import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormTwoPage } from './reactive-form-two.page';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormTwoPageRoutingModule {}
