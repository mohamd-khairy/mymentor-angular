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
export class CodeReviewService {

    constructor(private http: HttpClient,private router: Router,private authService: AuthService) { }


    get_about_api(id){

        return this.http.get(environment.apiUrl + 'job?user_id='+id)
                        .pipe(catchError(this.errorHandler))
    }

    get_CodeReview_meeting_for_mentor(id , status){
        let condition = this.authService.userData.user_type.user_type_name == 'mentor' ? 'user_give_id' : 'user_recieve_id';

        return this.http.get(environment.apiUrl + 'codeReview_session?codeReview_status='+status+'&'+condition+'='+id)
                        .pipe(catchError(this.errorHandler)) 
    }

    add_CodeReview_meeting(data){
        return this.http.post(environment.apiUrl + 'session' , data)
                 .pipe(catchError(this.errorHandler));
    }

    errorHandler(error: HttpErrorResponse){
        return throwError(error);
    }
}