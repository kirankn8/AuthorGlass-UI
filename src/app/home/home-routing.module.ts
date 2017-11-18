import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const home_routes: Routes = [
  { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forChild(home_routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
