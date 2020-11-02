import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LandingPageServiceService } from '../services/landing-page-service.service';

@Component({
  selector: 'app-online-class-page',
  templateUrl: './online-class-page.component.html',
  styleUrls: ['./online-class-page.component.css']
})
export class OnlineClassPageComponent implements OnInit {
  eventId;
  event;
  constructor(private route:ActivatedRoute,private landingPageServiceService: LandingPageServiceService) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.params.id;
    this.get_event();
  }

  get_event() {
    this.landingPageServiceService.getevent(this.eventId).subscribe(
      data => {
        if (data) {
          this.event = JSON.parse(JSON.stringify(data)).data;
          console.log(this.event);
          
        }
      }
    )
  }
}
