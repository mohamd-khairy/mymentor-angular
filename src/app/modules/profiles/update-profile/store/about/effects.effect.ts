import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { AboutActionsTypes, SUCCESSACTION, FAILACTION, ADDABOUTAction, UPDATEABOUTACTION, DELETEABOUTACTION } from './actions.action';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UpdateProfileService } from '../../update-profile.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class AboutEffect {

    constructor(private actions: Actions, private updateProfileService: UpdateProfileService , private router: Router){}

    languages$ = createEffect(() => this.actions.pipe(
        ofType(AboutActionsTypes.LOADLanguages),
        mergeMap(() => this.updateProfileService.get_languages_api().pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            catchError((error) => of(new FAILACTION(JSON.parse(JSON.stringify(error)))))
        ))
    ))

    days$ = createEffect(() => this.actions.pipe(
        ofType(AboutActionsTypes.LOADDays),
        mergeMap(() => this.updateProfileService.get_days_api().pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            catchError((error) => of(new FAILACTION(JSON.parse(JSON.stringify(error)))))
        ))
    ))


    about$ = createEffect(() => this.actions.pipe(
        ofType(AboutActionsTypes.LOADAbout),
        mergeMap(() => this.updateProfileService.get_about_api().pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            catchError((err) => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))
    
    addAbout$ = createEffect(() => this.actions.pipe(
        ofType(AboutActionsTypes.ADD),
        map((action: ADDABOUTAction) => action.payLoad),
        mergeMap((data) => this.updateProfileService.add_job_title_api(data)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/update/about')),
            catchError(err => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))

    updateAbout$ = createEffect(() => this.actions.pipe(
        ofType(AboutActionsTypes.UPDATE),
        map((action: UPDATEABOUTACTION) => action.payLoad),
        mergeMap((data) => this.updateProfileService.update_job_title_api(data)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/update/about')),
            catchError(err => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))

    deleteAbout$ = createEffect(() => this.actions.pipe(
        ofType(AboutActionsTypes.DELETE),
        map((action: DELETEABOUTACTION) => action.payLoad),
        mergeMap((id) => this.updateProfileService.delete_job_title_api(id)
        .pipe(
            map((data) => new SUCCESSACTION(JSON.parse(JSON.stringify(data)).data)),
            tap(() => this.router.navigateByUrl('/mentor/profile/update/about')),
            catchError(err => of(new FAILACTION(JSON.parse(JSON.stringify(err)))))
        ))
    ))
}