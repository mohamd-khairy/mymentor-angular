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
    this.authService.social_login_api(data).subscribe(
      (data) => {
        this.authService.login_ui(data);
      }
    )
  }

  login(formData: NgForm) {
    this.globals.start();
    this.authService.login_api(formData.value).subscribe(
      data => {
        this.authService.login_ui(data);
        this.globals.stop();
      },
      err => {
        this.errorMsg = err.error.message;
        this.globals.stop();
      }
    )
  }

}
