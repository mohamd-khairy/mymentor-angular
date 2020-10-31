import { Component, OnInit } from '@angular/core';
import { LandingPageServiceService } from '../services/landing-page-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  public mentors;

  constructor(private landingPageServiceService: LandingPageServiceService) { }

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
