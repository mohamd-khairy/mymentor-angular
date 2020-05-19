import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IinitialEducationsState} from './states.state'

let FEducationsFactory = createFeatureSelector<IinitialEducationsState>('educations');

export let loadingSelector = createSelector(FEducationsFactory , state => state.loading);
export let EducationsDataSelector = createSelector(FEducationsFactory , state => state.data);