import { Component, OnInit } from '@angular/core';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  toggle = null

  constructor(public globals: Globals) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggle = this.toggle == "toggled"? null : "toggled";
  }
}
