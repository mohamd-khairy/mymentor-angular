import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { RequestActionTypes, RequestSTATUSACTION, SuccessAction, FailAction } from './actions.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RequestService } from '../services/request.service';


@Injectable()
export class changeRequestStatusEffect{

    constructor(private actions: Actions , private RequestService: RequestService , private _location: Location){}

    changeRequestStatu$  : Observable<Action> =   createEffect(() => this.actions.pipe(
        ofType(RequestActionTypes.changesStatus),
        map((action: RequestSTATUSACTION) => action),
        mergeMap((action) => this.RequestService.change_request_status_api(action.payLoad,action.id)
        .pipe(
            map((data) => new SuccessAction(JSON.parse(JSON.stringify(data)).data)),
            tap(() => window.location.href="/my-requests"),
            catchError((err) => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))

}