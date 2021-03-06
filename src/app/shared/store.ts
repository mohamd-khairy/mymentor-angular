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
import { IinitialprofileState } from '../modules/profiles/update-profile/store/profile/states.state';
import { profilesAddReducer } from '../modules/profiles/update-profile/store/profile/reducers.reducer';
import { profilesEffect } from '../modules/profiles/update-profile/store/profile/effects.effect';
import { AddReviewReducer } from '../modules/profiles/profile/review/store/reducers.reducer';
import { AddreviewEffect } from '../modules/profiles/profile/review/store/effects.effect';
import { AddscheduleReducer } from '../modules/my-schedule/store/reducers.reducer';
import { AddscheduleEffect } from '../modules/my-schedule/store/effects.effect';
import { AddCodeReviewReducer } from '../modules/code-review/store/reducers.reducer';
import { AddCodeReviewEffect } from '../modules/code-review/store/effects.effect';
import { changeRequestStatusEffect } from '../modules/my-request/store/effects.effect';
import { changeStatusRequestReducer } from '../modules/my-request/store/reducers.reducer';
import { ChatReducer } from './component/stores/chatStore/reducers.reducer';
import { ChatEffect } from './component/stores/chatStore/effects.effect';

export interface StoreInterface {
    education : IEducationState[],
    experience: IExperienceState[],
    skill: ISkill[],
    addExperience: any,
    about: IinitialAboutState,
    skills: initialSkillState,
    educations: IinitialEducationsState,
    profile: IinitialprofileState,
    addReview: any,
    addschedule:any,
    addCodeReview:any,
    changeStatus:any,
    chat:any
}


export const reducers: ActionReducerMap<StoreInterface> = { 
    education:  educationReducer,
    experience: ExperienceReducer,
    skill:      SkillReducer,
    addExperience: experienceAddReducer,
    about: AboutReducer,
    skills: skillsAddReducer,
    educations: educationsAddReducer,
    profile: profilesAddReducer,
    addReview: AddReviewReducer,
    addschedule: AddscheduleReducer,
    addCodeReview: AddCodeReviewReducer,
    changeStatus: changeStatusRequestReducer,
    chat: ChatReducer
 };

export const effects = [
    SkillEffect,
    EducationEffect ,
    ExperienceEffect ,
    AddExperienceEffect ,
    AboutEffect,
    skillsEffect,
    educationsEffect,
    profilesEffect,
    AddreviewEffect,
    AddscheduleEffect,
    AddCodeReviewEffect,
    changeRequestStatusEffect,
    ChatEffect
];