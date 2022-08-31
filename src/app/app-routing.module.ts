import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'fullParent', pathMatch: 'prefix'},
  { path: 'fullParent', loadChildren: () => import('./full-parent/full-parent.module').then(m => m.FullParentModule)},
  { path: '**', redirectTo: 'not-found' },
  { path: 'not-found', component:NotFoundComponent },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
