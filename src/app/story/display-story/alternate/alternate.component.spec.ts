import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateComponent } from './alternate.component';

describe('AlternateComponent', () => {
  let component: AlternateComponent;
  let fixture: ComponentFixture<AlternateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
