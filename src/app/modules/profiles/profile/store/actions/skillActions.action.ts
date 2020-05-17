import { Action } from "@ngrx/store"
import { ISkill } from '../states/states.state';

export enum SkillActionsTypes{
    Loading     = '[skill] loading',
    Success     = '[skill] Success',
    Fail        = '[skill] Fail'
} 


export class Loading implements Action{
    readonly type: string = SkillActionsTypes.Loading;
}

export class Success implements Action{
    readonly type: string = SkillActionsTypes.Success;

    constructor(public payload: ISkill){}
}

export class Fail implements Action{
    readonly type: string = SkillActionsTypes.Fail;

    constructor(public payload: any){}
}
