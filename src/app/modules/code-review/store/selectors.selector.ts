import { createFeatureSelector, createSelector } from "@ngrx/store";
import {ICodeReviewInitialState} from './states.state'

let FCodeReviewFactory = createFeatureSelector<ICodeReviewInitialState>('addCodeReview');

export let loadingSelector = createSelector(FCodeReviewFactory , state => state.loading);
export let CodeReviewDataSelector = createSelector(FCodeReviewFactory , state => state.data);
export let AllAboutDataSelector = createSelector(FCodeReviewFactory , state => state.data);