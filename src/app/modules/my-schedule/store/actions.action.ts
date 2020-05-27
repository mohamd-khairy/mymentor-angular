import { Action } from '@ngrx/store';

export enum scheduleActionTypes {
    add     = '[schedule] add',
    Success = '[schedule] Success',
    Fail    = '[schedule] Fail'
}


export class scheduleADDACTION implements Action{
    readonly type = scheduleActionTypes.add

    constructor(public payLoad: any){}
}

export class SuccessAction implements Action{
    readonly type: string = scheduleActionTypes.Success;

    constructor(public payload: any){}
}

export class FailAction implements Action{
    readonly type: string = scheduleActionTypes.Fail;

    constructor(public payload: any){}
}