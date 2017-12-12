import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'special-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  bannerMsgs = [];

  constructor() { }

  ngOnInit() {
    this.assignBannerMsgs();
  }

  assignBannerMsgs() {
    this.bannerMsgs = [1,2,3,4,5];
  }


}
