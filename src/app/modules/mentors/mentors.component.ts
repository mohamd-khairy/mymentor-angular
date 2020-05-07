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

  constructor(private mentorService: MentorsService, public globals: Globals) { }

  ngOnInit(): void {
    this.globals.progressBar = true;
    this.getMentors_api();
  }

  getMentors_api(){
    this.mentorService.getMentors().subscribe(
      res => {
        this.globals.progressBar = false;
        this.mentorDate =  JSON.parse(JSON.stringify(res)).data;
        console.log(this.mentorDate);
      },
      err => {
        console.log(err);
      }
    )
  }
}
