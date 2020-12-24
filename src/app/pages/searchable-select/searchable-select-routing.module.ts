import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchableSelectPage } from './searchable-select.page';

const routes: Routes = [
  {
    path: '',
    component: SearchableSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchableSelectPageRoutingModule {}
