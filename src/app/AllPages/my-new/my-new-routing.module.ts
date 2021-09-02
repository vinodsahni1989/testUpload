import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyNewPage } from './my-new.page';

const routes: Routes = [
  {
    path: '',
    component: MyNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyNewPageRoutingModule {}
