import { Component, OnInit } from '@angular/core';
import { ScheduleService } from './services/schedule.service';
import { BehaviorSubject } from 'rxjs';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css']
})
export class MyScheduleComponent implements OnInit {


  private _upcomingMeetings = new BehaviorSubject(null);
  private _pastMeetings = new BehaviorSubject(null);

  public upcomingMeetings$ = this._upcomingMeetings.asObservable();
  public PastMeetings$ = this._pastMeetings.asObservable();

  constructor(public globals: Globals, private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.globals.start();
    this.get_schedule_sessions('upcoming');
    this.get_schedule_sessions('past');
  }

  get_schedule_sessions(status) {
    this.scheduleService.get_schedule_meeting(status).subscribe(
      (data) => {

        if (JSON.parse(JSON.stringify(data)).data) {
          if (status == 'upcoming') {
            this._upcomingMeetings.next(JSON.parse(JSON.stringify(data)).data);
          } else if (status == 'past') {
            this._pastMeetings.next(JSON.parse(JSON.stringify(data)).data);
          }
          this.globals.stop();
        }
      }
    )
  }


  generate_meeting(id) {
    this.globals.start();
    this.scheduleService.generate_meeting(id)
      .subscribe(
        (data) => {
          console.log(JSON.parse(JSON.stringify(data)).data);
          this.globals.stop();
        }
      )
  }


}
