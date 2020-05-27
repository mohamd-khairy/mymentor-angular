import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { CodeReviewActionTypes, CodeReviewADDACTION, SuccessAction, FailAction, LOADAboutAction } from './actions.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { CodeReviewService } from '../services/CodeReview.service';


@Injectable()
export class AddCodeReviewEffect{

    constructor(private actions: Actions , private CodeReviewService: CodeReviewService , private _location: Location){}

    addCodeReview$  : Observable<Action> =   createEffect(() => this.actions.pipe(
        ofType(CodeReviewActionTypes.add),
        map((action: CodeReviewADDACTION) => action.payLoad),
        mergeMap((data) => this.CodeReviewService.add_CodeReview_meeting(data)
        .pipe(
            map((data) => new SuccessAction(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this._location.back()),
            catchError((err) => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))

    about$  : Observable<any>  = createEffect(() => this.actions.pipe(
        ofType(CodeReviewActionTypes.LOADAbout),
        map((action: LOADAboutAction) => action.payLoad),
        mergeMap((id) => this.CodeReviewService.get_about_api(id).pipe(
            map((data) =>  new SuccessAction(JSON.parse(JSON.stringify(data)).data)),
            catchError((err) => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))
}