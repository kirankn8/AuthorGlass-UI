import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteStoryComponent } from './write-story.component';

describe('WriteStoryComponent', () => {
  let component: WriteStoryComponent;
  let fixture: ComponentFixture<WriteStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
