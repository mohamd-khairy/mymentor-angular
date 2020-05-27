import { createFeatureSelector, createSelector } from "@ngrx/store";
import {IRequestInitialState} from './states.state'

let FRequestFactory = createFeatureSelector<IRequestInitialState>('changeStatus');

export let loadingSelector = createSelector(FRequestFactory , state => state.loading);
export let RequestDataSelector = createSelector(FRequestFactory , state => state.data);
