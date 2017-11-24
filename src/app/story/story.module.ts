import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DisplayStoryComponent } from './display-story/display-story.component';

/* Routing */
import { StoryRoutingModule } from './story-routing.module';
import { WriteStoryComponent } from './write-story/write-story.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { ProgressBarDirective } from './progress-bar.directive';

@NgModule({
  declarations: [
    DisplayStoryComponent,
    WriteStoryComponent,
    EditStoryComponent,
    ProgressBarDirective,
  ],
  imports: [
    CommonModule,
    StoryRoutingModule,
  ],
  providers: [],
  exports: [ DisplayStoryComponent ],
})
export class StoryModule { }
