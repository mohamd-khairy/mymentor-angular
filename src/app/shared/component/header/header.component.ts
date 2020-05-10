import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SearchService } from 'src/app/global-modules/search/search.service';
import { Globals } from 'src/app/globals';
import { NgForm } from '@angular/forms';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public errorMsg = '';
  public successMsg = '';

  constructor(public authService: AuthService , public headerService: HeaderService, public globals: Globals, private router: Router) { }

  ngOnInit(): void {
  }

  search(formData: NgForm){

    setTimeout(() => {
      this.globals.errorMsg = '';
      this.successMsg = '';
    }, 10000);

    
    this.headerService.search_api(formData.value.q).subscribe(
      res => {
        this.globals.searchData = JSON.parse(JSON.stringify(res)).data;

        console.log(this.globals.searchData);
        this.globals.stop();
        this.successMsg = "Search Data returned Successfully";
        
      },
      err => {
        console.log(err);
        this.globals.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message ;
      }
    )

    this.router.navigateByUrl('/global/search');
    this.globals.stop();
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
