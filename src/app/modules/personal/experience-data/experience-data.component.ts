import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './experience.service';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-experience-data',
  templateUrl: './experience-data.component.html',
  styleUrls: ['./experience-data.component.css']
})
export class ExperienceDataComponent implements OnInit {

  public errorMsg = '';
  public successMsg = '';
  public experienceData;

  constructor(private experienceService: ExperienceService, public globals: Globals) { }

  ngOnInit(): void {
    this.globals.start();
    this.get_experience();
  }

  get_experience() {
    this.experienceService.get_experience_api().subscribe(
      res => {
        this.experienceData = JSON.parse(JSON.stringify(res)).data;

        this.globals.stop();
        this.successMsg = "Experience Data returned Successfully";
      },
      err => {
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message;
      }
    )
  }
}
