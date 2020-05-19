import { IEducationState, IExperienceState, ISkill } from '../modules/profiles/profile/store/states/states.state';
import { educationReducer } from '../modules/profiles/profile/store/reducers/reducers.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { ExperienceReducer } from '../modules/profiles/profile/store/reducers/experienceReducer.reducer';
import { SkillReducer } from '../modules/profiles/profile/store/reducers/skillReducer.reducer';
import { EducationEffect } from '../modules/profiles/profile/store/effects/educationEffects.effect';
import { ExperienceEffect } from '../modules/profiles/profile/store/effects/experienceEffects.effect';
import { SkillEffect } from '../modules/profiles/profile/store/effects/skillEffects.effect';
import { experienceAddReducer } from '../modules/profiles/update-profile/store/experience/reducers.reducer';
import { AddExperienceEffect } from '../modules/profiles/update-profile/store/experience/effects.effect';
import { IinitialAboutState } from '../modules/profiles/update-profile/store/about/states.state';
import { initialSkillState } from '../modules/profiles/update-profile/store/skill/states.state';
import { AboutReducer } from '../modules/profiles/update-profile/store/about/reducers.reducer';
import { skillsAddReducer } from '../modules/profiles/update-profile/store/skill/reducers.reducer';
import { AboutEffect } from '../modules/profiles/update-profile/store/about/effects.effect';
import { skillsEffect } from '../modules/profiles/update-profile/store/skill/effects.effect';
import { IinitialEducationsState } from '../modules/profiles/update-profile/store/education/states.state';
import { educationsAddReducer } from '../modules/profiles/update-profile/store/education/reducers.reducer';
import { educationsEffect } from '../modules/profiles/update-profile/store/education/effects.effect';

export interface StoreInterface {
    education : IEducationState[],
    experience: IExperienceState[],
    skill: ISkill[],
    addExperience: any,
    about: IinitialAboutState,
    skills: initialSkillState,
    educations: IinitialEducationsState
}


export const reducers: ActionReducerMap<StoreInterface> = { 
    education:  educationReducer,
    experience: ExperienceReducer,
    skill:      SkillReducer,
    addExperience: experienceAddReducer,
    about: AboutReducer,
    skills: skillsAddReducer,
    educations: educationsAddReducer
 };

export const effects = [
    SkillEffect,
    EducationEffect ,
    ExperienceEffect ,
    AddExperienceEffect ,
    AboutEffect,
    skillsEffect,
    educationsEffect
];