import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceDataComponent } from './add-experience-data.component';

describe('AddExperienceDataComponent', () => {
  let component: AddExperienceDataComponent;
  let fixture: ComponentFixture<AddExperienceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExperienceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExperienceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
