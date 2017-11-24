import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-write-story',
  templateUrl: './write-story.component.html',
  styleUrls: ['./write-story.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WriteStoryComponent implements OnInit {

  currentTab = 0;
  progress = 100/3;

  constructor() { }

  ngOnInit() {
    this.showTab(this.currentTab);
  }

  

  /*
    *  The below functions handle the Multistep Form
    */
  showTab(n) {
      let x: NodeListOf<Element> = document.querySelectorAll(".tab");
      (x[n] as HTMLDivElement).style.display = "block";
      document.getElementById("nextBtn").style.display = "inline";
      document.getElementById("prevBtn").style.display = "none";
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
      } else {
        document.getElementById("nextBtn").innerHTML = "Next";
      }
      this.fixStepIndicator(n);
  }

  nextPrev(n:number) {
      if(n==1)
        this.progress += (100/3);
      else
        this.progress -= (100/3);
      
      let x: HTMLCollectionOf<Element> = document.getElementsByClassName("tab");
      (x[this.currentTab] as HTMLDivElement).style.display = "none";
      this.currentTab = this.currentTab + n;
      if (this.currentTab >= x.length) {
          return false;
      }
      this.showTab(this.currentTab);
  }

  fixStepIndicator(n) {
      let i, x = document.getElementsByClassName("step");
      for (i = 0; i < x.length; i++) {
          x[i].className = x[i].className.replace(" active", "");
      }
      x[n].className += " active";
  }


}
