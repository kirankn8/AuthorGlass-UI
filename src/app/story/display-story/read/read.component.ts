import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { ReadService } from './read.service';
import { Content } from './content';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('page',[
      state('prevPage', style({ transform: 'rotateY(0deg)' })),
      state('currPage', style({ transform: 'scale(1)', opacity: 1 })),
      state('nextPage', style({ opacity: 1 })),
      transition('currPage => nextPage',[ 
        animate('800ms ease-in', keyframes([
          style({ transformOrigin: '0 100% 0', opacity: 1, transform: 'rotateY(0deg)', transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 75% 0', opacity: 0.5, transform: 'rotateY(-90deg)', transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 50% 0', opacity: 0, transform: 'rotateY(-180deg)', transformStyle:'preserve-3d' }),
          style({ transformOrigin: '0 50% 0', opacity: 0, transform: 'scale(1', transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 75% 0', opacity: 0.5, transform: 'scale(1)', transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 100% 0', opacity: 1, transform: 'scale(1)', transformStyle:'preserve-3d'}),
        ]))
       ]),
      
      //  transition('* => currPage',[ 
      //   animate(500, keyframes([
      //     style({ transformOrigin: '0 100% 0', opacity: 1, transform: 'rotateY(0deg)', offset: 0, transformStyle:'preserve-3d'}),
      //     style({ transformOrigin: '0 75% 0', opacity: 0.5, transform: 'rotateY(-90deg)', offset: 0.3, transformStyle:'preserve-3d'}),
      //     style({ transformOrigin: '0 50% 0', opacity: 0, transform: 'rotateY(-180deg)', offset: 1, transformStyle:'preserve-3d' }),
      //   ]))
      // ]), 

      transition('currPage => prevPage',[ 
        animate('800ms ease-out', keyframes([
          style({ transformOrigin: '0 50% 0', opacity: 0, transform: 'rotateY(-180deg)', offset: 0, transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 75% 0', opacity: 0.5, transform: 'rotateY(-90deg)', offset: 0.3, transformStyle:'preserve-3d'}),
          style({ transformOrigin: '0 100% 0', opacity: 1, transform: 'rotateY(0deg)', offset: 1, transformStyle:'preserve-3d'}),
        ]))
      ]),

    ]),
    // trigger('',[]),
  ],

  providers: [ReadService]
})
export class ReadComponent implements OnInit {

  pageAnimation = 'currPage';
  dummy_content = "New Worlds is a British science fiction magazine that began in 1936 as a \
                      fanzine called Novae Terrae. It was first published professionally in 1946, \
                      edited by John Carnell. It was the leading British science fiction publication \
                      during the period to 1960 described by historian Mike Ashley as the \
                      magazine's \"Golden Age\". Early issues featured \
                      John Wyndham's \"The Living Lies\", under his John Beynon \
                      alias, and \"Inheritance\", an early story by Arthur C. \
                      Clarke. \"Escapement\" by J. G. Ballard appeared in the December 1956 issue; \
                      this was Ballard's first professionally published work, and he went on to \
                      become a significant figure in science fiction in the 1960s. \
                      After 1964, when Michael Moorcock became editor, the magazine featured experimental \
                      and avant-garde material, and it became the focus of the modernist New Wave of science fiction. Reaction \
                      among the science fiction community was mixed, with partisans and opponents of \
                      the New Wave debating the merits of New Worlds in the columns of fanzines, such as Speculation. \
                      Several of the regular contributors during this period, including Brian Aldiss and Thomas M. Disch, \
                      became major names in science fiction.";
  prev_content: Content = new Content(1, this.dummy_content);
  current_content: Content = new Content(1, this.dummy_content);
  next_content: Content = new Content(2, this.dummy_content);

  constructor(private readService: ReadService) { }

  ngOnInit() {
    
  }

  nextPage() {    
    setTimeout(() => {
      this.pageAnimation = 'nextPage';
    });
    // this.pageAnimation = 'nextPage';
    this.prev_content = this.current_content;
    this.current_content = this.next_content;
  }

  prevPage() {
    setTimeout(() => {
      this.pageAnimation = 'prevPage';
    });
    this.next_content = this.current_content;
    this.current_content = this.prev_content; 
  }

  resetPageAnimation(event) { 
    setTimeout(() => {
      this.pageAnimation = 'currPage';
    });
  }
}
