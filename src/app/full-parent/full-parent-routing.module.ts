import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullParentComponent } from './full-parent/full-parent.component';

const routes: Routes = [
  {
    path: '',
    component: FullParentComponent,
    }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullParentRoutingModule { }
