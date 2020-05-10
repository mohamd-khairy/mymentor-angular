import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../experience.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/globals';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-experience-data',
  templateUrl: './add-experience-data.component.html',
  styleUrls: ['./add-experience-data.component.css']
})
export class AddExperienceDataComponent implements OnInit {

  public errorMsg = '';
  public successMsg = '';

  constructor(private experienceService: ExperienceService, private router: Router , public globals: Globals) { }

  ngOnInit(): void {
  }

  add_experience_data(formData: NgForm){
    const newData = Object.assign({}, formData.value, {
      present: formData.value.present1 ? true : false
    });

    delete newData.present1;

    this.experienceService.add_experience_api(newData).subscribe(
      res => {
        console.log(res);
        this.successMsg = "expreience Data Saved Successfully";
        setTimeout(() => {
          this.router.navigateByUrl('user/experience-data');
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
