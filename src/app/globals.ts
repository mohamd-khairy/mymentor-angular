import { Injectable } from "@angular/core";
import { AuthService } from './auth/auth.service';


@Injectable({
    providedIn: 'root'
})
export class Globals {

    constructor(public authservice: AuthService){}

    public progressBar= false;

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
