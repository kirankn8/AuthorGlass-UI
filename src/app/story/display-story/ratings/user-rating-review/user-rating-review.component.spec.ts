import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingReviewComponent } from './user-rating-review.component';

describe('UserRatingReviewComponent', () => {
  let component: UserRatingReviewComponent;
  let fixture: ComponentFixture<UserRatingReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRatingReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRatingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
