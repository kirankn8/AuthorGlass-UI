import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  

import { DisplayStoryComponent } from './display-story/display-story.component';

import { WriteStoryComponent } from './write-story/write-story.component';
import { EditStoryComponent } from './edit-story/edit-story.component';
import { ProgressBarDirective } from './progress-bar.directive';
import { ReadComponent } from './display-story/read/read.component';
import { RatingsComponent } from './display-story/ratings/ratings.component';
import { AlternateComponent } from './display-story/alternate/alternate.component';
import { UserRatingScorecardComponent } from './display-story/ratings/user-rating-scorecard/user-rating-scorecard.component';
import { UserRatingReviewComponent } from './display-story/ratings/user-rating-review/user-rating-review.component';
import { ReviewsComponent } from './display-story/ratings/reviews/reviews.component';
import { TinyEditorComponent } from './shared/tiny-editor/tiny-editor.component';

/* Routing */
import { StoryRoutingModule } from './story-routing.module';
import { TruncatePipe } from './shared/truncate.pipe';

@NgModule({
  declarations: [
    DisplayStoryComponent,
    WriteStoryComponent,
    EditStoryComponent,
    ProgressBarDirective,
    ReadComponent,
    RatingsComponent,
    AlternateComponent,
    UserRatingScorecardComponent,
    UserRatingReviewComponent,
    ReviewsComponent,
    TinyEditorComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    StoryRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [ ],
})
export class StoryModule { }
