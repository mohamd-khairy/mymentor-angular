import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOAD    = "[profile] Load",
    UPDATE  = "[profile] Update",
    DELETE  = "[profile] Delete",
    SUCCESS = "[profile] Success",
    FAIL    = "[profile] fail",
}

export class LOADACTION implements Action{
    readonly type = ActionTypes.LOAD;
}

export class UPDATEACTION implements Action{
    readonly type = ActionTypes.UPDATE;

    constructor(public payLoad: any , public id: any){}
}

export class DELETEACTION implements Action{
    readonly type = ActionTypes.DELETE;

    constructor(public payLoad: any){}
}

export class SUCCESSACTION implements Action{
    readonly type = ActionTypes.SUCCESS;
    
    constructor(public payLoad: any){}
}

export class FAILACTION implements Action{
    readonly type = ActionTypes.FAIL;
    
    constructor(public payLoad: any){}
}