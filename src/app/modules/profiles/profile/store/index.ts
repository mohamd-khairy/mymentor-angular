import { IEducationState, IExperienceState, ISkill } from './states/states.state';
import { educationReducer } from './reducers/reducers.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { ExperienceReducer } from './reducers/experienceReducer.reducer';
import { SkillReducer } from './reducers/skillReducer.reducer';
import { EducationEffect } from './effects/educationEffects.effect';
import { ExperienceEffect } from './effects/experienceEffects.effect';
import { SkillEffect } from './effects/skillEffects.effect';
import { experienceAddReducer } from '../../update-profile/store/reducers.reducer';
import { AddExperienceEffect } from '../../update-profile/store/effects.effect';

export interface StoreInterface {
    education : IEducationState[],
    experience: IExperienceState[],
    skill: ISkill[],
    addExperience: any,
}


export const reducers: ActionReducerMap<StoreInterface> = { 
    education:  educationReducer,
    experience: ExperienceReducer,
    skill:      SkillReducer,
    addExperience: experienceAddReducer,
 };

export const effects = [
    SkillEffect,
    EducationEffect ,
    ExperienceEffect ,
    AddExperienceEffect ,

];