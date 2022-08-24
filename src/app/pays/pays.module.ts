import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaysRoutingModule } from './pays-routing.module';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { ListPaysComponent } from './list-pays/list-pays.component';
import { PaysComponent } from './pays/pays.component';


@NgModule({
  declarations: [
    AddPaysComponent,
    ListPaysComponent,
    PaysComponent
  ],
  imports: [
    CommonModule,
    PaysRoutingModule
  ],
  exports:[
    PaysModule
  ]
})
export class PaysModule { }
