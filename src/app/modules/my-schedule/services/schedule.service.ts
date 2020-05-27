import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ScheduleService {

    constructor(private http: HttpClient,private router: Router,private authService: AuthService) { }

    add_schedule_meeting(data){
        return this.http.post(environment.apiUrl + 'session' , data)
                 .pipe(catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse){
        return throwError(error);
    }
}