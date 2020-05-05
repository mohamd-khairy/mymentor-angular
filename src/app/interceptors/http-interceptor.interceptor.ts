import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService , private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(this.authService.isAuthed()){
  
      let tokenizedreq = request.clone({
        setHeaders: {
          Authorization : 'Bearer '+ this.authService.user.access_token,
          Accept: 'q=0.8;application/json;q=0.9' 
        }
      });

      return next.handle(tokenizedreq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401 || error.status === 403) {
            localStorage.clear();
            this.router.navigateByUrl('/login');
          }
          return throwError(error);
        })
      );

    }else{

      return next.handle(request);

    }
  }
}
