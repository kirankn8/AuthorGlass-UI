import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayStoryComponent } from './display-story/display-story.component';

const story_routes: Routes = [
  { path: 'display', component: DisplayStoryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(story_routes)],
    exports: [RouterModule]
  })
  export class StoryRoutingModule {}