import { Action } from '@ngrx/store';

export enum ChatActionTypes {
    loadUser       = '[chat] loadUser',
    Success        = '[chat] Success',
    Fail           = '[chat] Fail'
}


export class LOADUSERACTION implements Action{
    readonly type = ChatActionTypes.loadUser

    constructor(public payLoad: any){}
}

export class SuccessAction implements Action{
    readonly type = ChatActionTypes.Success;

    constructor(public payload: any){}
}

export class FailAction implements Action{
    readonly type = ChatActionTypes.Fail;

    constructor(public payload: any){}
}