import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { SkillActionsTypes, Success, Fail, Loading } from '../actions/skillActions.action';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { LoadingAction } from '../actions/educationActions.action';
import { LOADINGACTIONEx } from '../actions/experienceActions.action';
import { ProfileService } from '../../profile.service';


@Injectable()
export class SkillEffect {

    experience$ = createEffect(() => this.actions.pipe(
        ofType(SkillActionsTypes.Loading),
        mergeMap(() => this.profileService.get_skills_api()
        .pipe(
            map((data) => new Success(JSON.parse(JSON.stringify(data)).data)),
            catchError((err) => of(new Fail(JSON.parse(JSON.stringify(err)))))
        ))
    ))

    constructor(private actions: Actions , private profileService: ProfileService){}
}
