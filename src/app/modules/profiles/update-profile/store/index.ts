import { IExperience } from 'src/app/modules/personal/experience-data/experience.service';
import { experienceAddReducer } from './reducers.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { AddExperienceEffect } from './effects.effect';

export interface StoreInterface {
    addExperience: any,
}


export const updateReducers: ActionReducerMap<StoreInterface> = { 
    addExperience: experienceAddReducer,
 };

export const updateEffects = [
    AddExperienceEffect ,
];