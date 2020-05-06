import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education-data',
  templateUrl: './education-data.component.html',
  styleUrls: ['./education-data.component.css']
})
export class EducationDataComponent implements OnInit {

  errorMsg = '';
  successMsg = '';

  constructor(private educationService: EducationService) { }

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
      },
      err => {
        console.log(err);
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message ;
      }
    )
  }


}
