import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMsg = '';
  successMsg = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  register(formData: NgForm){

    setTimeout(() => {
      this.errorMsg = '';
      this.successMsg = '';
    }, 3000);

    if(formData.value.password !== formData.value.cpassword){
      this.errorMsg = 'Confirm password not match the password';
      return;
    }

    this.authService.register_api(formData.value).subscribe(
      res => {
        console.log(res);
        let response = JSON.parse(JSON.stringify(res));
        this.successMsg = response.message;
      },
      err => {
        console.log(err);
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message ;
      }
    )
  }



}
