import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IExperienceState } from '../states/states.state';

let Fexperience = createFeatureSelector<IExperienceState>('experience');

export let CompanyNameSelector = createSelector(Fexperience, (state) => state.company_name);
export let JobTitleSelector    = createSelector(Fexperience, (state) => state.job_title);
export let PresentSelector     = createSelector(Fexperience , state => state.present);
export let StartDateSelector   = createSelector(Fexperience , state => state.start_date);
export let EndDateSelector     = createSelector(Fexperience , state => state.end_date);


export let AllExperienceDateSelector     = createSelector(Fexperience , state => state);
