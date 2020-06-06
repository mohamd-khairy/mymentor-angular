import { createFeatureSelector, createSelector } from "@ngrx/store";
import {IChatInitialState} from './states.state'

let FChatFactory = createFeatureSelector<IChatInitialState>('changeStatus');

export let loadingSelector = createSelector(FChatFactory , state => state.loading);
export let AllDataSelector = createSelector(FChatFactory , state => state.data);
