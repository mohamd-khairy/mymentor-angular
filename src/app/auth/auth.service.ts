import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

export interface User{
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
      private http: HttpClient,
      private router: Router
    ) { }

  login_api(user: User){
    return this.http.post(environment.apiUrl + 'auth/login' , user)
                    .pipe(catchError(this.errorHandler));
  }

  logout_api(){
    return this.http.post(environment.apiUrl + 'auth/logout',{
       headers: {'Authorization':'Bearer ' + this.user.access_token}
    }).pipe(catchError(this.errorHandler));
  }

  logout_ui(){
    localStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }

  login_ui(data) {
    localStorage.setItem('user', JSON.stringify(data));
    this.router.navigateByUrl('/dashboard');
  }

  get user() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isAuthed(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }

}
