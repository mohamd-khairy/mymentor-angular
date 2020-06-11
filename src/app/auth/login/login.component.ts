import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from 'src/app/globals';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from "firebase/app";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg = '';

  constructor(public auth: AngularFireAuth,
    private authService: AuthService, private router: Router, public globals: Globals) { }

  ngOnInit(): void {
  }

  socialLogin(provider: string) {
    this.authService.social_login_service(provider).then(
      (data) => {
        console.log(data);

        this.handleSocialLoginRespone(data, 'google');
      }
    )
  }

  handleSocialLoginRespone(result, type) {
    const postedData = {
      email: result.user.email ? result.user.email : result.additionalUserInfo.profile["id"] + "@test.com",
      name: result.user.displayName,
      provider: result.credential.providerId,
      provider_id: result.additionalUserInfo.profile["id"],
    };
    this.doSicailLogin(postedData);

  }

  doSicailLogin(data) {
    console.log(data);
    this.globals.start();
    this.authService.social_login_api(data).subscribe(
      (data) => {
        console.log(data);
        this.authService.login_ui(data);
        this.globals.stop();
      }
    )
  }

  login(formData: NgForm) {
    this.globals.start();
    console.log(formData.value);
    this.authService.login_api(formData.value).subscribe(
      data => {
        console.log(data);
        this.authService.login_ui(data);
        this.globals.stop();
      },
      err => {
        console.log(err.error.message);
        this.errorMsg = err.error.message;
        this.globals.stop();
      }
    )
  }

}
