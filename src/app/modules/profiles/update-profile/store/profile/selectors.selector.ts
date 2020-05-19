import { createFeatureSelector, createSelector } from "@ngrx/store";
import {IinitialprofileState} from './states.state'

let FprofileFactory = createFeatureSelector<IinitialprofileState>('profile');

export let loadingSelector = createSelector(FprofileFactory , state => state.loading);
export let profileDataSelector = createSelector(FprofileFactory , state => state.data);