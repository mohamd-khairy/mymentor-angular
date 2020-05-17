import { Action } from '@ngrx/store';

export enum ActionTypes {
    ADD     = "[addExperience] Add",
    SUCCESS = "[addExperience] Success",
    FAIL    = "[addExperience] fail",
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