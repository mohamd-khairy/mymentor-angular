import { createFeatureSelector, createSelector } from "@ngrx/store";
import {initialSkillState} from './states.state'

let FSkillFactory = createFeatureSelector<initialSkillState>('skills');

export let loadingSelector = createSelector(FSkillFactory , state => state.loading);
export let SkillDataSelector = createSelector(FSkillFactory , state => state.data);