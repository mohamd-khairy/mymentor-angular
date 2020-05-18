import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IinitialAboutState } from './states.state';


let FAboutFactory = createFeatureSelector<IinitialAboutState>('about');

export let loadingSelector = createSelector(FAboutFactory, state => state.loading);
export let ErrorsSelector = createSelector(FAboutFactory, state => state.errors);
export let AllAboutDataSelector = createSelector(FAboutFactory, state => state.data);