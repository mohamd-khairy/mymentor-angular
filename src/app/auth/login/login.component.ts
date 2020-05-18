import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg = '';

  constructor(private authService: AuthService, private router: Router, public globals: Globals) { }

  ngOnInit(): void {
  }

  login(formData: NgForm){
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
        this.errorMsg = err.error.message
      }
    )
  }

}
