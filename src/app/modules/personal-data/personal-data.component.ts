import { Component, OnInit } from '@angular/core';
import { PersonalService, Profile } from './personal.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  selectedFile: File

  errorMsg = '';
  successMsg = '';

  constructor(private personalService: PersonalService , private router: Router) { }

  ngOnInit(): void {
  }

  update_profile_data(formData: NgForm){
   
    const file = new FormData();
    file.append('photo', this.selectedFile , this.selectedFile.name);

    this.personalService.profile_api(formData.value).subscribe(
      res => {
        console.log(res);
        this.personalService.upload_file(file).subscribe(
          res => {
            console.log(res);
            this.successMsg = "Personal Data Updated Successfully";
          },
          err => {
            console.log(err);
            this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message ;
          }
        )
      },
      err => {
        console.log(err);
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message ;
      }
    )
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
}
