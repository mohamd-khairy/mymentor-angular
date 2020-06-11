import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from "firebase/app";

export interface UserLogin {
  email: string,
  password: string
}

export interface UserRegister {
  first_name: string,
  last_name: string,
  email: string,
  mobile: number,
  password: string,
  cpassword: string
}

export interface UserForgotPassword {
  email: string,
}

export interface UserVerifyEmail {
  token: string,
}

export interface UserResetPassword {
  code: string,
  newPassword: string,
  cnewPassword: string,
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    private http: HttpClient,
    private router: Router
  ) { }

  social_login_service(provider) {
    if (provider == 'google') {
      return this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    }

    if (provider == 'twitter') {
      return this.auth.signInWithPopup(new auth.TwitterAuthProvider());
    }
  }

  social_login_api(data) {
    return this.http.post(environment.apiUrl + 'auth/social_login', data)
      .pipe(catchError(this.errorHandler));

  }

  login_api(user: UserLogin) {
    return this.http.post(environment.apiUrl + 'auth/login', user)
      .pipe(catchError(this.errorHandler));
  }

  login_ui(data) {
    localStorage.setItem('user', JSON.stringify(data));
    this.me();
    this.router.navigateByUrl('/dashboard');
  }

  logout_api() {
    return this.http.post(environment.apiUrl + 'auth/logout', {
      headers: { 'Authorization': 'Bearer ' + this.user.access_token }
    }).pipe(catchError(this.errorHandler));
  }

  logout_ui() {
    localStorage.removeItem('user');
    localStorage.clear();
    this.auth.signOut();
    this.router.navigateByUrl('login');
  }


  register_api(user: UserRegister) {
    return this.http.post(environment.apiUrl + 'auth/register', user)
      .pipe(catchError(this.errorHandler));
  }

  forgotPassword_api(user: UserForgotPassword) {
    return this.http.post(environment.apiUrl + 'auth/forget/password', user)
      .pipe(catchError(this.errorHandler));
  }

  resetPassword_api(user: UserResetPassword) {
    return this.http.post(environment.apiUrl + 'auth/reset/password', user)
      .pipe(catchError(this.errorHandler));
  }

  verifyEmail_api(user: UserVerifyEmail) {
    return this.http.get(environment.apiUrl + 'auth/verify?token=' + user)
      .pipe(catchError(this.errorHandler));
  }

  get_user_data_by_user_id(id) {
    return this.http.get(environment.apiUrl + 'user/' + id)
      .pipe(catchError(this.errorHandler));
  }

  get user() {
    return JSON.parse(localStorage.getItem('user'));
  }

  get userData() {
    return JSON.parse(localStorage.getItem('userData'));
  }

  get userType() {
    return JSON.parse(localStorage.getItem('userData')).user_type.user_type_name;
  }

  me() {
    return this.http.post(environment.apiUrl + 'auth/me', {}).subscribe(
      data => {
        let AlluserData = JSON.parse(JSON.stringify(data))
        localStorage.setItem('userData', JSON.stringify(AlluserData.data));
      }
    )
  }

  isAuthed(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
