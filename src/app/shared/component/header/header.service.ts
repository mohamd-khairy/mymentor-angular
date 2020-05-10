import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Globals } from 'src/app/globals';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public q;

  constructor(private http: HttpClient, public globals: Globals , private router: Router) { }

  search_api(q){

    this.q = q;

    return this.http.get(environment.apiUrl+'search?q='+q)
    .pipe(catchError(this.errorHandler))
  }

  loadMore(nextPageUrl){
    return this.http.get(nextPageUrl+'&q='+this.q)
                    .pipe(catchError(this.errorHandler));
  }



  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
