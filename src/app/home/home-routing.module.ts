import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BSCComponent } from './bsc/bsc.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'bsc', pathMatch: 'prefix' },
      {
        path: 'bsc',
        component: BSCComponent
      }
    ]
    }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
