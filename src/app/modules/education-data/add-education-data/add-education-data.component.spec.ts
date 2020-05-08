import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationDataComponent } from './add-education-data.component';

describe('AddEducationDataComponent', () => {
  let component: AddEducationDataComponent;
  let fixture: ComponentFixture<AddEducationDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEducationDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEducationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
