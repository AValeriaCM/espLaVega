import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiserPage } from './regiser.page';

const routes: Routes = [
  {
    path: '',
    component: RegiserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiserPageRoutingModule {}
