import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorDetailsComponent } from './author-details/author-details.component';

const author_routes: Routes = [
  { path: '', component: AuthorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(author_routes)],
  exports: [RouterModule]
})
export class AuthorRoutingModule { }
