import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { ActionTypes, ADDAction } from './actions.action';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UpdateProfileService } from '../update-profile.service';
import { of, Observable } from 'rxjs';
import {SUCCESSACTION , FAILACTION} from '../store/actions.action';
import { Action } from '@ngrx/store';
import { FailAction } from '../../profile/store/actions/educationActions.action';
import { Router } from '@angular/router';


@Injectable()
export class AddExperienceEffect {

    constructor(private actions$: Actions , private updateProfileService: UpdateProfileService , private router: Router){}

    
    experience$ : Observable<Action> = createEffect(() =>  this.actions$.pipe(
        ofType(ActionTypes.ADD),
        map((action: ADDAction) => action.payLoad),
        mergeMap((data) => this.updateProfileService.add_experience_api(data)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/update/experiences')),
            catchError(err => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))
        

}