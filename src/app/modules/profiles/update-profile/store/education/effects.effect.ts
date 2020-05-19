import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { ActionTypes, ADDAction, UPDATEACTION, DELETEACTION, LOADACTION } from './actions.action';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UpdateProfileService } from '../../update-profile.service';
import { of, Observable } from 'rxjs';
import {SUCCESSACTION , FAILACTION} from './actions.action';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';


@Injectable()
export class educationsEffect {

    constructor(private actions$: Actions , private updateProfileService: UpdateProfileService , private router: Router){}

    education$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.LOADALL),
        mergeMap(() => this.updateProfileService.get_education_api()
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            catchError(err => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))
    
    Addeducation$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.ADD),
        map((action: ADDAction) => action.payLoad),
        mergeMap((data) => this.updateProfileService.add_education_api(data)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/update/educations')),
            catchError(err => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))

    Updateeducation$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.UPDATE),
        map((action: UPDATEACTION) => action),
        mergeMap((action) => this.updateProfileService.update_education_api(action.payLoad , action.id)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/update/educations')),
            catchError(err => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))

    Deleteeducation$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.DELETE),
        map((action: DELETEACTION) => action.payLoad),
        mergeMap((id) => this.updateProfileService.delete_one_education_by_id_api(id)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/update/educations')),
            catchError(err => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))


    GetOneeducation$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.LOAD),
        map((action: LOADACTION) => action.payLoad),
        mergeMap((id) => this.updateProfileService.get_one_education_by_id_api(id)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            catchError(err => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))

}