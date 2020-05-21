import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  errorMsg = '';
  successMsg = '';
  code = '';

  constructor(private authService: AuthService, private router: Router , private route: ActivatedRoute,  public globals: Globals) { }

  ngOnInit(): void {
    this.code = this.route.snapshot.params.token;
  }

  reserPassword(formData: NgForm){
    this.globals.start();

    if(formData.value.newPassword !== formData.value.cnewPassword){
      this.errorMsg = 'Confirm new password not match the new password';
      return;
    }

    const newData = Object.assign({}, formData.value, {
      code: this.code
    });

    this.authService.resetPassword_api(newData).subscribe(
      res => {
        console.log(res);
        let response = JSON.parse(JSON.stringify(res));
        this.successMsg = response.message;
        setTimeout(() => {
          this.router.navigateByUrl('login');
          this.successMsg = '';
        }, 3000);
        this.globals.stop();

      },
      err => {
        console.log(err);
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message ;
        setTimeout(() => {
          this.errorMsg = '';
        }, 5000);
        this.globals.stop();

      }
    );
  }
}
