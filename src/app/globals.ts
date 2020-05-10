import { Injectable } from "@angular/core";
import { AuthService } from './auth/auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class Globals {

    constructor(public authservice: AuthService,private router: Router, private http: HttpClient){}

    public searchData;

    public progressBar= false;

    public Arr = Array;

    public errorMsg;

    public formData: string;

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
