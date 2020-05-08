import { Component, OnInit } from '@angular/core';
import { PersonalService, Profile } from './personal.service';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Globals } from 'src/app/globals';
import { PersonalData } from './personal-data';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  selectedFile: File

  errorMsg = '';
  successMsg = '';

  profileData ;

  constructor(public globals: Globals ,private personalService: PersonalService , private router: Router) { }
  

  ngOnInit(): void {
    this.globals.start();
    this.get_profile_data();
  }

  get_profile_data(){
    this.personalService.get_profile_api().subscribe(
      res => {
        let response = JSON.parse(JSON.stringify(res)).data;
        this.profileData = new PersonalData(  response.first_name,
                                              response.middle_name,
                                              response.last_name,
                                              response.mobile,
                                              response.phone_number,
                                              response.country,
                                              response.city,
                                              response.address,
                                              response.postal_code,
                                              response.gender,
                                              response.date_of_birth,
                                              response.marital_status,
                                              response.photo
                                            );
        this.globals.stop();                                    
        console.log(res);
      },
      err => {
        console.log(err);
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message ;
      }
    )
  }

  update_profile_data(formData: NgForm){
    const file = new FormData();

    if(this.selectedFile){
      file.append('photo', this.selectedFile , this.selectedFile.name);  
    }
    
    this.personalService.profile_api(formData.value).subscribe(
      res => {
        console.log(res);
        this.successMsg = "Personal Data Updated Successfully";
          if(this.selectedFile){
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
          }
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
