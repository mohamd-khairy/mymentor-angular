import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  errorMsg = '';
  successMsg = '';

  constructor(private authService: AuthService, private router: Router ,   public globals: Globals) { }

  ngOnInit(): void {
  }

  verifyEmail(formData: NgForm){
    this.globals.start();

    this.authService.verifyEmail_api(formData.value.token).subscribe(
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
