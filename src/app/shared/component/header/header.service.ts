import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Globals } from 'src/app/globals';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {


  constructor(private http: HttpClient, public globals: Globals, private router: Router) { }


  get_my_notification_api(id) {
    return this.http.get(environment.apiUrl + 'notification?user_id=' + id)
      .pipe(catchError(this.errorHandler))
  }


  read_notification_api(user_id) {
    return this.http.get(environment.apiUrl + 'notification/read/' + user_id)
      .pipe(catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
