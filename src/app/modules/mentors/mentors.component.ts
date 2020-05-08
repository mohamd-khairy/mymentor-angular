import { Component, OnInit } from '@angular/core';
import { MentorsService } from './mentors.service';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {

  mentorDate;

  Arr= Array;

  constructor(private mentorService: MentorsService, public globals: Globals) { }

  ngOnInit(): void {
    this.globals.start();
    this.getMentors_api();
  }

  getMentors_api(){
    
    this.mentorService.getMentors().subscribe(
      res => {
        this.globals.stop();
        this.mentorDate =  JSON.parse(JSON.stringify(res)).data;
      },
      err => {
        console.log(err);
      }
    )
  }
}
