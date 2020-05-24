import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { ActionsTypes, SuccessAction, FailAction } from '../actions/educationActions.action';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProfileService } from 'src/app/modules/profiles/profile/profile.service'
@Injectable()
export class EducationEffect {

    constructor(private actions: Actions , private profileService: ProfileService){}
}