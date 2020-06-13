import { Component, OnInit } from '@angular/core';
import { SessionsService } from './sessions.service';
import { Router } from '@angular/router';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {

  public errorMsg = '';
  public successMsg = '';
  public sessionData;
  public Arr = Array;

  constructor(private sessionService: SessionsService, private router: Router, public globals: Globals) { }

  ngOnInit(): void {
    this.globals.start();
    this.get_sessions();
  }

  get_sessions() {
    this.sessionService.get_sessions_api().subscribe(
      res => {
        this.sessionData = JSON.parse(JSON.stringify(res)).data;

        this.globals.stop();
        this.successMsg = "Sessions Data returned Successfully";
      },
      err => {
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message;
      }
    )
  }

}
