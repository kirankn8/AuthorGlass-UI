import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('page',[
      state('prevPage', style({ transform: 'rotateY(0deg)' })),
      state('currPage', style({ transform: 'scale(1)', opacity: 0 })),
      state('nextPage', style({ opacity: 1 })),
      transition('* => nextPage',[ 
        animate(800, keyframes([
          style({ transformOrigin: '0 50% 0', opacity: 0, transform: 'rotateY(-10deg)', offset: 0, transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 75% 0', opacity: 0.5, transform: 'rotateY(-5deg)', offset: 0.3, transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 100% 0', opacity: 1, transform: 'rotateY(0deg)', offset: 1, transformStyle:'preserve-3d'}),
        ]))
       ]),
      
       transition('* => currPage',[ 
        animate(500, keyframes([
          style({ transformOrigin: '0 100% 0', opacity: 1, transform: 'rotateY(0deg)', offset: 0, transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 75% 0', opacity: 0.5, transform: 'rotateY(-90deg)', offset: 0.3, transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 50% 0', opacity: 0, transform: 'rotateY(-180deg)', offset: 1, transformStyle:'preserve-3d' }),
        ]))
      ]), 

      transition('* => prevPage',[ 
        animate(500, keyframes([
          style({ transformOrigin: '0 50% 0', opacity: 0, transform: 'rotateY(-180deg)', offset: 0, transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 75% 0', opacity: 0.5, transform: 'rotateY(-90deg)', offset: 0.3, transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 100% 0', opacity: 1, transform: 'rotateY(0deg)', offset: 1, transformStyle:'preserve-3d'}),
        ]))
      ]),

    ]),


    // trigger('',[]),
  ],
})
export class ReadComponent implements OnInit {

  page_animation = 'currPage';
  
  constructor() { }

  ngOnInit() {
  }

  nextPage(){
    this.page_animation = 'nextPage';
  }

  prevPage(){
    this.page_animation = 'prevPage';
  }

}
