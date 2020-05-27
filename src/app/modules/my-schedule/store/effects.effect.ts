import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { scheduleActionTypes, scheduleADDACTION, SuccessAction, FailAction } from './actions.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ScheduleService } from '../services/schedule.service';


@Injectable()
export class AddscheduleEffect{

    constructor(private actions: Actions , private scheduleService: ScheduleService , private _location: Location){}

    addschedule$  : Observable<Action> =   createEffect(() => this.actions.pipe(
        ofType(scheduleActionTypes.add),
        map((action: scheduleADDACTION) => action.payLoad),
        mergeMap((data) => this.scheduleService.add_schedule_meeting(data)
        .pipe(
            map((data) => new SuccessAction(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this._location.back()),
            catchError((err) => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))
}