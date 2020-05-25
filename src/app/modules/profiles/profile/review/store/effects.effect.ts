import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { reviewActionTypes, REVIEWADDACTION, SuccessAction, FailAction } from './actions.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { ProfileService } from '../../profile.service';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Injectable()
export class AddreviewEffect{

    constructor(private actions: Actions , private profileService: ProfileService , private _location: Location){}

    addReview$  : Observable<Action> =   createEffect(() => this.actions.pipe(
        ofType(reviewActionTypes.add),
        map((action: REVIEWADDACTION) => action.payLoad),
        mergeMap((data) => this.profileService.add_rate_api(data)
        .pipe(
            map((data) => new SuccessAction(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this._location.back()),
            catchError((err) => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))
}