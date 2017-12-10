import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecommendationsComponent implements OnInit {

  books = [1,2,3,4,5,6,7,8,9,10,11,12,13]

  constructor() { }

  ngOnInit() {
  }

}
