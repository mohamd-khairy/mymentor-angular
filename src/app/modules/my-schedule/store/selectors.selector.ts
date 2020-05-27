import { createFeatureSelector, createSelector } from "@ngrx/store";
import {IscheduleInitialState} from './states.state'

let FscheduleFactory = createFeatureSelector<IscheduleInitialState>('addschedule');

export let loadingSelector = createSelector(FscheduleFactory , state => state.loading);
export let scheduleDataSelector = createSelector(FscheduleFactory , state => state.data);