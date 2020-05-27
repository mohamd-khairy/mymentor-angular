import { Action } from '@ngrx/store';

export enum RequestActionTypes {
    changesStatus  = '[Request] changesStatus',
    Success        = '[Request] Success',
    Fail           = '[Request] Fail'
}


export class RequestSTATUSACTION implements Action{
    readonly type = RequestActionTypes.changesStatus

    constructor(public payLoad: any , public id: any){}
}

export class SuccessAction implements Action{
    readonly type = RequestActionTypes.Success;

    constructor(public payload: any){}
}

export class FailAction implements Action{
    readonly type = RequestActionTypes.Fail;

    constructor(public payload: any){}
}