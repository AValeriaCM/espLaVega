import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiserPageRoutingModule } from './regiser-routing.module';

import { RegiserPage } from './regiser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiserPageRoutingModule
  ],
  declarations: [RegiserPage]
})
export class RegiserPageModule {}
