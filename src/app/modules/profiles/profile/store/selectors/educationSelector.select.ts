import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IEducationState } from '../states/states.state';

let Feducaton = createFeatureSelector<IEducationState>('education');

export let EducationNameSelector = createSelector(Feducaton , state => state.education_name);
export let UniversitySelector    = createSelector(Feducaton , state => state.university);
export let FacultySelector       = createSelector(Feducaton , state => state.faculty);
export let DepartmentSelector    = createSelector(Feducaton , state => state.department);
export let DegreeSelector        = createSelector(Feducaton , state => state.degree);
export let PresentSelector       = createSelector(Feducaton , state => state.present);
export let StartDateSelector     = createSelector(Feducaton , state => state.start_date);
export let EndDateSelector       = createSelector(Feducaton , state => state.end_date);
