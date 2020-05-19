import { Injectable } from '@angular/core';
import { IExperience } from '../../personal/experience-data/experience.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { throwError } from 'rxjs';
import { ISkill } from '../profile/store/states/states.state';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

  constructor(private http: HttpClient , private authService: AuthService) { }

  //////////////////// language \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  get_about_api(){
    return this.http.get(environment.apiUrl + 'job?user_id='+this.authService.userData.id)
                    .pipe(catchError(this.errorHandler))
  }

  add_job_title_api(data: any){
    return this.http.post(environment.apiUrl + 'job', data)
                    .pipe(catchError(this.errorHandler))
  }

  update_job_title_api(data: any){
    return this.http.put(environment.apiUrl + 'job/'+data.id , data)
                    .pipe(catchError(this.errorHandler))
  }

  delete_job_title_api(id: BigInteger){
    return this.http.delete(environment.apiUrl + 'job/'+id)
                    .pipe(catchError(this.errorHandler))
  }

  //////////////////// language \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  get_languages_api(){
    return this.http.get(environment.apiUrl + 'language')
                    .pipe(catchError(this.errorHandler))
  }

  
  //////////////////// WeekDays \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  get_days_api(){
    return this.http.get(environment.apiUrl + 'days')
                    .pipe(catchError(this.errorHandler))
  }

  /////////////////// experience \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  add_experience_api(data: IExperience){
    return this.http.post(environment.apiUrl + 'experience' , data)
                    .pipe(catchError(this.errorHandler))
  }

  update_experience_api(data: any){
    return this.http.put(environment.apiUrl + 'experience/'+data.id , data)
                    .pipe(catchError(this.errorHandler))
  }

  get_one_experience_by_id_api(id: BigInteger){
    return this.http.get(environment.apiUrl + 'experience/'+ id)
                    .pipe(catchError(this.errorHandler))
  }

  delete_one_experience_by_id_api(id: BigInteger){
    return this.http.delete(environment.apiUrl + 'experience/'+ id)
                    .pipe(catchError(this.errorHandler))
  }

  get_experience_api(){
    return this.http.get(environment.apiUrl + 'experience?user_id='+ this.authService.userData.id)
                    .pipe(catchError(this.errorHandler))
  }

  /////////////////// skill \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  add_skill_api(data: any){
    return this.http.post(environment.apiUrl + 'skill' , data)
                    .pipe(catchError(this.errorHandler))
  }

  update_skill_api(data: any , id: any){
    return this.http.post(environment.apiUrl + 'skill/'+id , data)
                    .pipe(catchError(this.errorHandler))
  }

  get_one_skill_by_id_api(id: BigInteger){
    return this.http.get(environment.apiUrl + 'skill/'+ id)
                    .pipe(catchError(this.errorHandler))
  }

  delete_one_skill_by_id_api(id: BigInteger){
    return this.http.delete(environment.apiUrl + 'skill/'+ id)
                    .pipe(catchError(this.errorHandler))
  }

  get_skill_api(){
    return this.http.get(environment.apiUrl + 'skill?user_id='+ this.authService.userData.id)
                    .pipe(catchError(this.errorHandler))
  }

  /////////////////// educations \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  add_education_api(data: any){
    return this.http.post(environment.apiUrl + 'education' , data)
                    .pipe(catchError(this.errorHandler))
  }

  update_education_api(data: any , id: any){
    return this.http.put(environment.apiUrl + 'education/'+id , data)
                    .pipe(catchError(this.errorHandler))
  }

  get_one_education_by_id_api(id: BigInteger){
    return this.http.get(environment.apiUrl + 'education/'+ id)
                    .pipe(catchError(this.errorHandler))
  }

  delete_one_education_by_id_api(id: BigInteger){
    return this.http.delete(environment.apiUrl + 'education/'+ id)
                    .pipe(catchError(this.errorHandler))
  }

  get_education_api(){
    return this.http.get(environment.apiUrl + 'education?user_id='+ this.authService.userData.id)
                    .pipe(catchError(this.errorHandler))
  }


  
  /////////////////// profile \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  update_profile_api(data: any , id: any){
    return this.http.post(environment.apiUrl + 'profile' , data)
                    .pipe(catchError(this.errorHandler))
  }

  get_one_profile_by_id_api(){
    return this.http.get(environment.apiUrl + 'profile/'+ this.authService.userData.id)
                    .pipe(catchError(this.errorHandler))
  }


  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
