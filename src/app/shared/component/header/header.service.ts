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


  constructor(private http: HttpClient, public globals: Globals , private router: Router) { }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
