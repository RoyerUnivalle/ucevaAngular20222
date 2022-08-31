import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullParentComponent } from './full-parent/full-parent.component';


const routes: Routes = [
  {
    path: '',
    component: FullParentComponent,
    pathMatch: 'prefix',
    children:[
      { path: '', redirectTo: 'pays', pathMatch: 'prefix' },
      { path: 'pays', loadChildren: () => import('../pays/pays.module').then(m => m.PaysModule) },
    ]
   },
  ]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FullParentRoutingModule { }
