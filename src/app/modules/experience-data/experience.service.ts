import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/auth/auth.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface IExperience{
  company_name: string,
  job_title:string,
  details: string,
  present: boolean,
  start_date: string,
  end_date: string
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient , private authService: AuthService) { }

  add_experience_api(data: IExperience){
    return this.http.post(environment.apiUrl + 'experience' , data)
                    .pipe(catchError(this.errorHandler))
  }

  get_experience_api(){
    return this.http.get(environment.apiUrl + 'experience?user_id='+ this.authService.userData.id)
                    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
  
}
