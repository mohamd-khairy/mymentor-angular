
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EducationService } from '../education.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-education-data',
  templateUrl: './add-education-data.component.html',
  styleUrls: ['./add-education-data.component.css']
})
export class AddEducationDataComponent  implements OnInit {

  errorMsg = '';
  successMsg = '';

  constructor(private educationService: EducationService, private router: Router) { }

  ngOnInit(): void {
  }


  update_education_data(formData: NgForm){
    
    const newData = Object.assign({}, formData.value, {
      present: formData.value.present1 ? true : false
    });

    delete newData.present1;

    this.educationService.education_api(newData).subscribe(
      res => {
        console.log(res);
        this.successMsg = "Education Data Saved Successfully";
        setTimeout(() => {
          this.router.navigateByUrl('user/education-data');
          this.successMsg = '';
        }, 2000);
      },
      err => {
        console.log(err);
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message ;
      }
    )
  }


}
