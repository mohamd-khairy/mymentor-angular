import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NgForm } from '@angular/forms';

export interface Profile{
  first_name: string,
  middle_name: string,
  last_name: string,
  mobile: number,
  phone_number: number,
  country: string,
  city: string,
  address: string,
  postal_code: number,
  gender: string,
  marital_status: boolean,
}


@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient , private router: Router) { }

  profile_api(data: Profile)
  {
    return this.http.post(environment.apiUrl + 'profile' , data)
                    .pipe(catchError(this.errorHandler));
  }

  upload_file(file)
  {
    return this.http.post(environment.apiUrl + 'profile' , file)
                    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
