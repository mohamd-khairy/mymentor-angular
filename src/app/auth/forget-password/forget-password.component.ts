import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public errorMsg;
  public successMsg;

  constructor(private authService: AuthService , private router: Router , public globals: Globals) { }

  ngOnInit(): void {}

  forgotPassword(formData: NgForm){

    this.globals.start();

    this.authService.forgotPassword_api(formData.value).subscribe(
      res => {
        console.log(res);
        let response = JSON.parse(JSON.stringify(res));
        this.successMsg = response.message;
        setTimeout(() => {
          this.router.navigateByUrl('login');
          this.successMsg = '';
        }, 5000);
        this.globals.stop();

      },
      err => {
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.email[0] ;
        setTimeout(() => {
          this.errorMsg = '';
        }, 5000);
        this.globals.stop();

      }
    );
  }
}
