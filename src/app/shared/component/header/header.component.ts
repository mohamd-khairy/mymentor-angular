import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SearchService } from 'src/app/global-modules/search/search.service';
import { Globals } from 'src/app/globals';
import { NgForm } from '@angular/forms';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';
import { ChatServiceService } from '../chat/chat-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, public searchService: SearchService,
    private chatService: ChatServiceService,
    public headerService: HeaderService, public globals: Globals, private router: Router) { }

  ngOnInit(): void {
  }

  search(formData: NgForm) {
    this.globals.start();
    this.searchService.getsearchData(formData.value.q);
  }



  logout() {
    this.globals.start();
    this.authService.logout_api().subscribe(
      data => {
        console.log(data);
        this.authService.logout_ui();
        this.globals.stop();
      },
      err => {
      }
    )
  }
}
