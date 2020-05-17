import { createFeatureSelector, createSelector } from "@ngrx/store";
import {initialExperienceState} from './states.state'

let FExperienceFactory = createFeatureSelector<initialExperienceState>('addExperience');

export let loadingSelector = createSelector(FExperienceFactory , state => state.loading);
export let ExperienceDataSelector = createSelector(FExperienceFactory , state => state.data);