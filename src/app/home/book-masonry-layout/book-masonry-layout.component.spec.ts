import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMasonryLayoutComponent } from './book-masonry-layout.component';

describe('BookMasonryLayoutComponent', () => {
  let component: BookMasonryLayoutComponent;
  let fixture: ComponentFixture<BookMasonryLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMasonryLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMasonryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
