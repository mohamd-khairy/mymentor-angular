import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ChatActionTypes, LOADUSERACTION , SuccessAction, FailAction } from './actions.action';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/auth/auth.service';
import { ProfileService } from 'src/app/modules/profiles/profile/profile.service';


@Injectable()
export class ChatEffect{

    constructor(private actions: Actions , private profileService: ProfileService){}

    chat$  : Observable<Action> =   createEffect(() => this.actions.pipe(
        ofType(ChatActionTypes.loadUser),
        map((action: LOADUSERACTION) => action),
        mergeMap((action) => this.profileService.get_profile_api(action.payLoad)
        .pipe(
            map((data) => new SuccessAction(JSON.parse(JSON.stringify(data)).data)),
            catchError((err) => of(new FailAction(JSON.parse(JSON.stringify(err)))))
        ))
    ))

}