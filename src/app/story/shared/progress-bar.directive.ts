import { Directive, Input, ElementRef  } from '@angular/core';
import { OnInit } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProgressBar]'
})
export class ProgressBarDirective implements OnInit {

  @Input('appProgressBar') percentage: number;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.setWidthAndInnerHTML();
  }

  ngDoCheck() {
    this.setWidthAndInnerHTML();
  }

  setWidthAndInnerHTML() {
    this.el.nativeElement.style.width = this.percentage+"%";
    this.el.nativeElement.innerHTML = "Step: "+Math.ceil(2*this.percentage/100)+"/2";
  }
  
}
