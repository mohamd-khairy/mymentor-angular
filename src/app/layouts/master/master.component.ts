import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  providers: [ Globals ]
})
export class MasterComponent implements OnInit {

  constructor(public globals: Globals) { }

  ngOnInit(): void {
  }

}
