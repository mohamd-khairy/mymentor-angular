import { Component, OnInit } from '@angular/core';
import { EducationService } from './education.service';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-education-data',
  templateUrl: './education-data.component.html',
  styleUrls: ['./education-data.component.css']
})
export class EducationDataComponent implements OnInit {

  public errorMsg = '';
  public successMsg = '';

  public educationsData;

  constructor(private educationService: EducationService, public globals: Globals) { }

  ngOnInit(): void {
    this.globals.start();
    this.educations();
  }

  educations() {
    this.educationService.get_education_api().subscribe(
      res => {
        this.educationsData = JSON.parse(JSON.stringify(res)).data;

        this.globals.stop();
        this.successMsg = "Education Data returned Successfully";
      },
      err => {
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message;
      }
    )
  }
}

