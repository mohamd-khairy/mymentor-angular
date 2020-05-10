import { Injectable } from "@angular/core";
import { AuthService } from './auth/auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HeaderService } from './shared/component/header/header.service';


@Injectable({
    providedIn: 'root'
})
export class Globals {

    constructor(public authservice: AuthService,private router: Router, private http: HttpClient){}

    public searchData;

    public progressBar= false;

    public Arr = Array;

    public errorMsg;

    start(){
        this.progressBar = true ;
    }

    stop(){
        this.progressBar = false ;
    }

    userData(){
        return this.authservice.userData;
    }

   
}
