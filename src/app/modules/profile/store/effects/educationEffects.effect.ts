import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ActionsTypes, SuccessAction, FailAction } from '../actions/educationActions.action';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProfileService } from 'src/app/modules/profile/profile.service'
@Injectable()
export class EducationEffect {

    education$ = createEffect(() => this.actions.pipe(
        ofType(ActionsTypes.LoadingData),
        mergeMap(() => this.profileService.get_education_api()
        .pipe(
            map((data) => new SuccessAction(JSON.parse(JSON.stringify(data)).data)),
            catchError((error) => of(new FailAction(JSON.parse(JSON.stringify(error)))))
        ))
    ))

    constructor(private http: HttpClient ,private authService: AuthService , private actions: Actions ,
         private profileService: ProfileService){}
}