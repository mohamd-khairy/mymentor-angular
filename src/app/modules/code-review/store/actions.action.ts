import { Action } from '@ngrx/store';

export enum CodeReviewActionTypes {
    LOADAbout = '[CodeReview] LOADAbout',
    add       = '[CodeReview] add',
    Success   = '[CodeReview] Success',
    Fail      = '[CodeReview] Fail'
}

export class LOADAboutAction implements Action {
    readonly type = CodeReviewActionTypes.LOADAbout;

    constructor(public payLoad: any){}
}

export class CodeReviewADDACTION implements Action{
    readonly type = CodeReviewActionTypes.add

    constructor(public payLoad: any){}
}

export class SuccessAction implements Action{
    readonly type = CodeReviewActionTypes.Success;

    constructor(public payload: any){}
}

export class FailAction implements Action{
    readonly type = CodeReviewActionTypes.Fail;

    constructor(public payload: any){}
}