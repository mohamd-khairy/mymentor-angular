import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestService{

    constructor(private http: HttpClient,private router: Router,private authService: AuthService) { }


    get_my_pending_request_for_mentor_api(id){
        let condition = this.authService.userData.user_type.user_type_name == 'mentor' ? 'user_give_id' : 'user_recieve_id';

        return this.http.get(environment.apiUrl + 'session?status=pending&'+condition+'='+id)
                        .pipe(catchError(this.errorHandler))
    }

    get_my_accept_request_for_mentor_api(id){
        let condition = this.authService.userData.user_type.user_type_name == 'mentor' ? 'user_give_id' : 'user_recieve_id';

        return this.http.get(environment.apiUrl + 'session?status=accept&'+condition+'='+id)
                        .pipe(catchError(this.errorHandler))
    }

    get_my_reject_request_for_mentor_api(id){
        let condition = this.authService.userData.user_type.user_type_name == 'mentor' ? 'user_give_id' : 'user_recieve_id';

        return this.http.get(environment.apiUrl + 'session?status=reject&'+condition+'='+id)
                        .pipe(catchError(this.errorHandler))
    }

    change_request_status_api(id , data){
        return this.http.post(environment.apiUrl + 'accept/'+id , data)
                        .pipe(catchError(this.errorHandler))
    }

    errorHandler(error: HttpErrorResponse){
        return throwError(error);
    }
}