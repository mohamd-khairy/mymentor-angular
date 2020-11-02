import { Component, OnInit } from '@angular/core';
import { LandingPageServiceService } from '../services/landing-page-service.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  public events;

  constructor(private landingPageServiceService: LandingPageServiceService) { }

  ngOnInit(): void {
    this.get_events();
  }

  get_events() {
    this.landingPageServiceService.getevents().subscribe(
      data => {
        if (data) {
          this.events = JSON.parse(JSON.stringify(data)).data;          
        }
      }
    )
  }

}
