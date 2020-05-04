import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(formData: NgForm){
    console.log(formData.value);
    this.authService.login_api(formData.value).subscribe(
      data => { 
        console.log(data);
        this.authService.login_ui(data);
      },
      err => { 
        console.log(err.error.message);
        this.errorMsg = err.error.message
      }
    )
  }

}
