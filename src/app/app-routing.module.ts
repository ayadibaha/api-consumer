import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalarieComponent } from './salarie/salarie.component';

const routes: Routes = [
  {path: 'salarie/:id', component: SalarieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
