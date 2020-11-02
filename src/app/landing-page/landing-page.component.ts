import { Component, OnInit } from '@angular/core';
import { Globals } from '../globals';
import { MentorsService } from '../modules/mentors/mentors.service';
import { LandingPageServiceService } from './services/landing-page-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public mentors;

  constructor(private landingPageServiceService: LandingPageServiceService , public globals: Globals) { }

  ngOnInit(): void {
    this.get_mentors();
  }

  get_mentors() {
    this.landingPageServiceService.getMentors().subscribe(
      data => {
        if (data) {
          this.mentors = JSON.parse(JSON.stringify(data)).data;
        }
      }
    )
  }

}
