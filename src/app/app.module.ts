import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeModule } from './home/home.module';
import { PaysModule } from './pays/pays.module';
import { AccesDeniedComponent } from './acces-denied/acces-denied.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,AccesDeniedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PaysModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
