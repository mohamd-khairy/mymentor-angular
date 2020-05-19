import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { ActionTypes, ADDAction, UPDATEACTION, DELETEACTION, LOADACTION } from './actions.action';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UpdateProfileService } from '../../update-profile.service';
import { of, Observable } from 'rxjs';
import {SUCCESSACTION , FAILACTION} from './actions.action';
import { Action } from '@ngrx/store';
import { FailAction } from '../../../profile/store/actions/educationActions.action';
import { Router } from '@angular/router';


@Injectable()
export class skillsEffect {

    constructor(private actions$: Actions , private updateProfileService: UpdateProfileService , private router: Router){}

    skill$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.LOADALL),
        mergeMap(() => this.updateProfileService.get_skill_api()
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            catchError(err => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))
    
    Addskill$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.ADD),
        map((action: ADDAction) => action.payLoad),
        mergeMap((data) => this.updateProfileService.add_skill_api(data)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/update/skills')),
            catchError(err => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))

    Updateskill$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.UPDATE),
        map((action: UPDATEACTION) => action),
        mergeMap((action) => this.updateProfileService.update_skill_api(action.payLoad , action.id)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/update/skills')),
            catchError(err => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))

    Deleteskill$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.DELETE),
        map((action: DELETEACTION) => action.payLoad),
        mergeMap((id) => this.updateProfileService.delete_one_skill_by_id_api(id)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/update/skills')),
            catchError(err => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))


    GetOneskill$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.LOAD),
        map((action: LOADACTION) => action.payLoad),
        mergeMap((id) => this.updateProfileService.get_one_skill_by_id_api(id)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            catchError(err => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))

}