import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './/home-routing.module';
import { BookComponent } from './book/book.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [ DashboardComponent, BookshelfComponent, RecommendationsComponent, HomeComponent, BookComponent],
  exports:      [ HomeComponent ],
})
export class HomeModule { }
