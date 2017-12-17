import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators  } from '@angular/forms';

import { Chapter } from './chapter';

@Component({
  selector: 'app-write-story',
  templateUrl: './write-story.component.html',
  styleUrls: ['./write-story.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WriteStoryComponent implements OnInit {

  // Write story form
  storyForm: FormGroup;
  undoStoryForm = []; 

  // Form content vaiables
  genres = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];

  // Multi-step form UI variables 
  currentTab = 0;
  progress = 100/2;

  // Fill Chapters page variables
  editChapterTitleId = -1;          // Represents a flag && Id in the array
  activePillId = 0;

  constructor(private fb: FormBuilder) { 
    this.createStoryForm();
  }

  ngOnInit() {
    this.showTab(this.currentTab); // Initialize the multistep-form to first tab 
  }

  createStoryForm() {
    this.storyForm = this.fb.group({
      chapters: this.fb.array([]),
    });
    this.addChapter();
  }

  get chapters(): FormArray { return this.storyForm.get('chapters') as FormArray; }

  addChapter() {
    this.chapters.push(this.fb.group(new Chapter(`Chapter ${this.chapters.length+1}`, '')));
  }

  removeChapter(chapterId) {
    if(this.chapters.length>1){
      this.undoStoryForm.push({chapterId: chapterId, chapter: this.chapters.at(chapterId)});
      console.log(this.undoStoryForm);
      this.chapters.removeAt(chapterId);
    }
  }
  
  undoStoryChapterDelete() {
    if(this.undoStoryForm.length!=0) {
      let temp =  this.undoStoryForm.pop();
      console.log(temp);
      this.chapters.insert(temp.chapterId, temp.chapter);
    }  
  }

  editChapterTitle(chapterId) {
    this.editChapterTitleId = chapterId;
  }

  cancelChapterTitleEditing(i, title) {
    this.chapters.value[i].title = title
    this.editChapterTitleId = -1;
  }

  saveChapterTitle() {
    this.editChapterTitleId = -1;
  }

  getDataToggleLink(i) {
    return "#v-pills-"+i;
  }

  getDataToggleLinkForId(i) {
    return "v-pills-"+i;
  }

  makePillActive(i) {
    if(this.activePillId!=i){
      this.activePillId = i;
      this.editChapterTitleId = -1;
    }
  } 

  keyupTinyMCEHandlerFunction(event, i) {
    // console.log(event);
    this.chapters.at(i).patchValue({
      body: event,
    });
    // console.log(this.chapters.value);
  }

  tinyMCEId(i) {
    return "my-editor-"+i;
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
        this.progress += (100/2);
      else
        this.progress -= (100/2);
      
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
