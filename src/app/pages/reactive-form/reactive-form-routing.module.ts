import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormPage } from './reactive-form.page';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveFormPageRoutingModule {}
