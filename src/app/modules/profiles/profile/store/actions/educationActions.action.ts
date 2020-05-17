import { Action } from "@ngrx/store"
import { IEducationState } from '../states/states.state';

export enum ActionsTypes{
    LoadingData     = '[education] loadingData',
    ResponseSuccess = '[education] responseSuccess',
    ResponseFail    = '[education] responseFail'
} 


export class LoadingAction implements Action{
    readonly type: string = ActionsTypes.LoadingData;
}

export class SuccessAction implements Action{
    readonly type: string = ActionsTypes.ResponseSuccess;

    constructor(public payload: IEducationState){}
}

export class FailAction implements Action{
    readonly type: string = ActionsTypes.ResponseFail;

    constructor(public payload: any){}
}