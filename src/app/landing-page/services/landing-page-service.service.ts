import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingPageServiceService {

  constructor(private http: HttpClient) { }

  getMentors() {
    return this.http.get(environment.apiUrl + 'most_popular_mentor').pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }


  getevents(){
    return this.http.get(environment.apiUrl + 'online_event').pipe(catchError(this.errorHandler));
  }

  getevent(id){
    return this.http.get(environment.apiUrl + 'online_event/'+id).pipe(catchError(this.errorHandler));
  }
}



