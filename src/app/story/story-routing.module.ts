import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayStoryComponent } from './display-story/display-story.component';
import { WriteStoryComponent } from './write-story/write-story.component';
import { EditStoryComponent } from './edit-story/edit-story.component';

const story_routes: Routes = [
  { path: '', component: DisplayStoryComponent },
  { path: 'write', component: WriteStoryComponent },
  { path: 'edit', component: EditStoryComponent },
];

@NgModule({
    imports: [RouterModule.forChild(story_routes)],
    exports: [RouterModule]
  })
  export class StoryRoutingModule {}