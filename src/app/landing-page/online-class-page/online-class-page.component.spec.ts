import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineClassPageComponent } from './online-class-page.component';

describe('OnlineClassPageComponent', () => {
  let component: OnlineClassPageComponent;
  let fixture: ComponentFixture<OnlineClassPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineClassPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineClassPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
