import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ISkill } from '../states/states.state';

let Fexperience = createFeatureSelector<ISkill>('skill');

export let SkillNameSelector         = createSelector(Fexperience, state => state.skill_name);
export let ExperienceYearSelector    = createSelector(Fexperience, state => state.experience_years);
export let DetailsSelector           = createSelector(Fexperience , state => state.details);
export let PhotoSelector           = createSelector(Fexperience , state => state.photo);

