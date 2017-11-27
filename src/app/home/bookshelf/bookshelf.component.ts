import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookshelfComponent implements OnInit {

  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  constructor() { }

  ngOnInit() {
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    
       this.carouselTile = {
         grid: {xs: 3, sm: 5, md: 5, lg: 4, all: 0},
         slide: 2,
         speed: 400,
         animation: 'lazy',
         point: {
           visible: true,
         },
         load: 2,
         touch: true,
         easing: 'ease'
       }
  }

  public carouselTileLoad(evt: any) {
    const len = this.carouselTileItems.length
    if (len <= 30) {
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push(i);
      }
    }
  }

}
