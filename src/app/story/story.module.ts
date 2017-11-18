import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DisplayStoryComponent } from './display-story/display-story.component';

/* Routing */
import { StoryRoutingModule } from './story-routing.module';

@NgModule({
  declarations: [
    DisplayStoryComponent,
  ],
  imports: [
    CommonModule,
    StoryRoutingModule,
  ],
  providers: [],
  exports: [ DisplayStoryComponent ],
})
export class StoryModule { }
