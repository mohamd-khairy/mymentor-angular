import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Globals } from 'src/app/globals';
import { HeaderService } from 'src/app/shared/component/header/header.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public searchService: SearchService, private router: Router, public globals: Globals, public headerService: HeaderService)
   { 
    searchService.registerMyApp(this);
   }

  ngOnInit(): void {
    if(!this.searchService.searchKey){
      this.router.navigateByUrl('dashboard');
    }
   }

  paginate(url) {

    this.globals.start();
    this.searchService.loadMore(url).subscribe(
      res => {
        this.globals.stop();
        console.log(this.searchService.searchData);
        this.searchService.searchData = JSON.parse(JSON.stringify(res)).data;
      },
      err => {
        console.log(err);
        this.searchService.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message;
      }
    )
  }

  start(){
    this.globals.start();
  }

  stop(){
    this.globals.stop();
  }

}