import { Action } from '@ngrx/store';

export enum reviewActionTypes {
    add = '[review] add',
    Success = '[review] Success',
    Fail    = '[review] Fail'
}


export class REVIEWADDACTION implements Action{
    readonly type = reviewActionTypes.add

    constructor(public payLoad: any){}
}

export class SuccessAction implements Action{
    readonly type: string = reviewActionTypes.Success;

    constructor(public payload: any){}
}

export class FailAction implements Action{
    readonly type: string = reviewActionTypes.Fail;

    constructor(public payload: any){}
}