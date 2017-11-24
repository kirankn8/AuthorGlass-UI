import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRatingScorecardComponent } from './user-rating-scorecard.component';

describe('UserRatingScorecardComponent', () => {
  let component: UserRatingScorecardComponent;
  let fixture: ComponentFixture<UserRatingScorecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRatingScorecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRatingScorecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
