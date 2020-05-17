import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ActionTypes, SUCCESSACTIONEx, FAILACTIONEx } from '../actions/experienceActions.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';
import { of } from 'rxjs';
import { ProfileService } from '../../profile.service';


@Injectable()
export class ExperienceEffect {

    experience$ = createEffect(() => this.actions.pipe(
        ofType(ActionTypes.LoadingDataEx),
        mergeMap(() => this.profileService.get_experience_api()
        .pipe(
            map((data) => new SUCCESSACTIONEx(JSON.parse(JSON.stringify(data)).data)),
            catchError((err) => of(new FAILACTIONEx(JSON.parse(JSON.stringify(err)))))
        ))
    ))

    constructor(private actions: Actions , private http: HttpClient, private authService:AuthService,
        private profileService: ProfileService){}
}