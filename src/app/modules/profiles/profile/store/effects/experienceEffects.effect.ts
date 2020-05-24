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



    constructor(private actions: Actions , private profileService: ProfileService){}
}