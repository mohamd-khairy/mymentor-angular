import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  toggle = null

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggle = this.toggle == "toggled"? null : "toggled";
  }
}
