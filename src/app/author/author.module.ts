import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './/author-routing.module';
import { AuthorDetailsComponent } from './author-details/author-details.component';

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
  ],
  declarations: [AuthorDetailsComponent],
  exports: [ ],
})
export class AuthorModule { }
