import { Action } from '@ngrx/store';
import { IExperienceState } from '../states/states.state';

export enum ActionTypes {
    LoadingDataEx     = '[experience] LoadingDataEx',
    ResponseSuccessEx = '[experience] ResponseSuccessEx',
    ResponseFailEx    = '[experience] ResponseFailEx'
}


export class LOADINGACTIONEx implements Action{
    readonly type: string = ActionTypes.LoadingDataEx
}

export class SUCCESSACTIONEx implements Action{
    readonly type: string = ActionTypes.ResponseSuccessEx

    constructor(public payload: IExperienceState){}
}

export class FAILACTIONEx implements Action{
    readonly type: string = ActionTypes.ResponseFailEx

    constructor(public payload: any){}
}