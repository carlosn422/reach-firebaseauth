import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveybuilderComponent } from './surveybuilder.component';

describe('SurveybuilderComponent', () => {
  let component: SurveybuilderComponent;
  let fixture: ComponentFixture<SurveybuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveybuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveybuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
