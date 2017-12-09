import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './/home-routing.module';
import { BookComponent } from './book/book.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { BookMasonryLayoutComponent } from './book-masonry-layout/book-masonry-layout.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxCarouselModule,
  ],
  declarations: [ DashboardComponent, BookshelfComponent, RecommendationsComponent, HomeComponent, BookComponent, BookMasonryLayoutComponent],
  exports:      [ ],
})
export class HomeModule { }
