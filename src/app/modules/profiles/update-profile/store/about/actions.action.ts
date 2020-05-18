import { Action } from '@ngrx/store';

export enum AboutActionsTypes{
    LOADLanguages = "[about] LoadLang",
    LOADDays      = "[about] LoadDays",
    LOADAbout     = "[about] LoadAbout",
    ADD           = "[about] Add",
    UPDATE        = "[about] Update",
    DELETE        = "[about] Delete",
    SUCCESS       = "[about] Success",
    FAIL          = "[about] Fail",
}


export class LOADLanguagesAction implements Action {
    readonly type = AboutActionsTypes.LOADLanguages;
}

export class LOADDaysAction implements Action {
    readonly type = AboutActionsTypes.LOADDays;
}

export class LOADAboutAction implements Action {
    readonly type = AboutActionsTypes.LOADAbout;
}

export class UPDATEABOUTACTION implements Action{
    readonly type = AboutActionsTypes.UPDATE;

    constructor(public payLoad: any){}
}

export class DELETEABOUTACTION implements Action{
    readonly type = AboutActionsTypes.DELETE;

    constructor(public payLoad: any){}
}

export class ADDABOUTAction implements Action{
    readonly type = AboutActionsTypes.ADD;

    constructor(public payLoad: any){}
}

export class SUCCESSACTION implements Action {
    readonly type = AboutActionsTypes.SUCCESS;

    constructor(public payLoad){}
}

export class FAILACTION implements Action {
    readonly type = AboutActionsTypes.FAIL;

    constructor(public payLoad){}
}