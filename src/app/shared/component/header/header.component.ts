import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout_api().subscribe(
      data => { 
        console.log(data);
        this.authService.logout_ui();
      },
      err => { 
      }
    )
  }
}
