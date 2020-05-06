import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface IEducation{
  education_name: string,
  university:string,
  faculty: string,
  department: string,
  degree: string,
  details: string,
  present: boolean,
  start_date: string,
  end_date: string
}

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  education_api(data: IEducation){
    return this.http.post(environment.apiUrl + 'education' , data)
      .pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
