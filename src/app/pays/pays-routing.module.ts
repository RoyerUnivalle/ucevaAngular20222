import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaysComponent } from './pays/pays.component';
import { AddPaysComponent } from './add-pays/add-pays.component';
import { ListPaysComponent } from './list-pays/list-pays.component';

const routes: Routes = [
  {
    path: '',
    component: PaysComponent,
    outlet: 'paysOut',
    children: [
      { path: '', redirectTo: 'add', pathMatch: 'prefix' },
      {
        path: 'add',
        component: AddPaysComponent,
        outlet: 'payActive'
      },
      {
        path: 'list',
        component: ListPaysComponent,
        outlet: 'payActive'
      },
    ]
    }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaysRoutingModule { }
