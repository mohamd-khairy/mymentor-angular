import { IEducationState, IExperienceState, ISkill } from './states/states.state';
import { educationReducer } from './reducers/reducers.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { ExperienceReducer } from './reducers/experienceReducer.reducer';
import { SkillReducer } from './reducers/skillReducer.reducer';
import { EducationEffect } from './effects/educationEffects.effect';
import { ExperienceEffect } from './effects/experienceEffects.effect';
import { SkillEffect } from './effects/skillEffects.effect';

export interface StoreInterface {
    education : IEducationState[],
    experience: IExperienceState[],
    skill: ISkill[]
}


export const reducers: ActionReducerMap<StoreInterface> = { 
    education:  educationReducer,
    experience: ExperienceReducer,
    skill:      SkillReducer
 };

export const effects = [
    SkillEffect,
    EducationEffect ,
    ExperienceEffect ,
];