import { Injectable } from '@angular/core';
import { IExperience } from '../../personal/experience-data/experience.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

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
