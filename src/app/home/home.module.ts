import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './/home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [ DashboardComponent, BookshelfComponent, RecommendationsComponent, HomeComponent],
  exports:      [ HomeComponent ],
})
export class HomeModule { }
