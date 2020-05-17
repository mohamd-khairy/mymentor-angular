import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSocialComponent } from './update-social.component';

describe('UpdateSocialComponent', () => {
  let component: UpdateSocialComponent;
  let fixture: ComponentFixture<UpdateSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
