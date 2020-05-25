import { createFeatureSelector, createSelector } from "@ngrx/store";
import {IReviewInitialState} from './states.state'

let FReviewFactory = createFeatureSelector<IReviewInitialState>('addReview');

export let loadingSelector = createSelector(FReviewFactory , state => state.loading);
export let ReviewDataSelector = createSelector(FReviewFactory , state => state.data);