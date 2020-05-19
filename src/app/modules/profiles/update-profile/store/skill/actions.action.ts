import { Action } from '@ngrx/store';

export enum ActionTypes {
    LOADALL = "[skill] LoadAll",
    LOAD    = "[skill] Load",
    ADD     = "[skill] Add",
    UPDATE  = "[skill] Update",
    DELETE  = "[skill] Delete",
    SUCCESS = "[skill] Success",
    FAIL    = "[skill] fail",
}

export class LOADALLACTION implements Action{
    readonly type = ActionTypes.LOADALL;
}

export class LOADACTION implements Action{
    readonly type = ActionTypes.LOAD;

    constructor(public payLoad: any){}
}

export class UPDATEACTION implements Action{
    readonly type = ActionTypes.UPDATE;

    constructor(public payLoad: any){}
}

export class DELETEACTION implements Action{
    readonly type = ActionTypes.DELETE;

    constructor(public payLoad: any){}
}

export class ADDAction implements Action{
    readonly type = ActionTypes.ADD;

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