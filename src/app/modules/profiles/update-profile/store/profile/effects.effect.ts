import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { ActionTypes, UPDATEACTION, DELETEACTION, LOADACTION } from './actions.action';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UpdateProfileService } from '../../update-profile.service';
import { of, Observable } from 'rxjs';
import {SUCCESSACTION , FAILACTION} from './actions.action';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';


@Injectable()
export class profilesEffect {

    constructor(private actions$: Actions , private updateProfileService: UpdateProfileService , private router: Router){}

    profile$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.LOAD),
        mergeMap(() => this.updateProfileService.get_one_profile_by_id_api()
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            catchError(err => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))
    

    Updateprofile$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.UPDATE),
        map((action: UPDATEACTION) => action),
        mergeMap((action) => this.updateProfileService.update_profile_api(action.payLoad , action.id)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/'+action.id)),
            catchError(err => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))





}