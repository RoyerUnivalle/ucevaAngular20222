import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BSCComponent } from './bsc/bsc.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    BSCComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    HomeModule
  ]
})
export class HomeModule { }
