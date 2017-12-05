import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeSdkComponent } from './creative-sdk.component';

describe('CreativeSdkComponent', () => {
  let component: CreativeSdkComponent;
  let fixture: ComponentFixture<CreativeSdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreativeSdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativeSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
