import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullParentRoutingModule } from './full-parent-routing.module';
import { FullParentComponent } from './full-parent/full-parent.component';
import { PaysModule } from '../pays/pays.module';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    FullParentComponent
  ],
  imports: [
    CommonModule,
    FullParentRoutingModule,
    PaysModule,
    HomeModule
  ]
})
export class FullParentModule { }
