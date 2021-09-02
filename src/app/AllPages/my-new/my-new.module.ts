import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyNewPageRoutingModule } from './my-new-routing.module';

import { MyNewPage } from './my-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyNewPageRoutingModule
  ],
  declarations: [MyNewPage]
})
export class MyNewPageModule {}
