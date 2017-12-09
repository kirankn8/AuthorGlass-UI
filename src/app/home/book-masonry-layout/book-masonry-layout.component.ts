import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { card_widths, card_colors } from './extra-data';

@Component({
  selector: 'book-masonry-layout',
  templateUrl: './book-masonry-layout.component.html',
  styleUrls: ['./book-masonry-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookMasonryLayoutComponent implements OnInit {

  items = [1,2,3,4,5,6,7,8,9,10,11,12];

  constructor() { }

  ngOnInit() {
  }

  // getRandomInt(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  getCardColors(i) {
    let n = card_colors.length;
    if(i<8)
      return `card card-radius ${ card_colors[i%n]}`;
    else 
      return `card card-radius ${ card_colors[i%n]} hidden-md-down`;
  }

  getDynamicCardWidth(i) {
    let m = card_widths.length;
    return `card-block card-height ${card_widths[i%m]}`;
  }
}
