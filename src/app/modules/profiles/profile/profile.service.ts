import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient,private router: Router,private authService: AuthService) { }

  get_education_api()
  {
    return this.http.get(environment.apiUrl+'education?user_id='+this.authService.userData.id)
    .pipe(catchError(this.errorHandler));
  }

  get_experience_api()
  {
    return this.http.get(environment.apiUrl+'experience?user_id='+this.authService.userData.id)
    .pipe(catchError(this.errorHandler));
  }

  get_job_details_api()
  {
    return this.http.get(environment.apiUrl + 'job?user_id='+this.authService.userData.id)
    .pipe(catchError(this.errorHandler));
  }

  get_profile_api()
  {
    return this.http.get(environment.apiUrl + 'profile/'+this.authService.userData.id)
    .pipe(catchError(this.errorHandler));
  }

  get_skills_api()
  {
    return this.http.get(environment.apiUrl + 'skill?user_id='+this.authService.userData.id)
    .pipe(catchError(this.errorHandler));
  }

  get_rates_api()
  {
    return this.http.get(environment.apiUrl + 'rate?user_rated_id='+this.authService.userData.id)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
