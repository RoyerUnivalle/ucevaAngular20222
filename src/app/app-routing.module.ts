import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'full', pathMatch: 'prefix' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'pays', loadChildren: () => import('./pays/pays.module').then(m => m.PaysModule) },
  { path: 'full', loadChildren: () => import('./full-parent/full-parent.module').then(m => m.FullParentModule) },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
