import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Globals } from 'src/app/globals';
import { HeaderService } from 'src/app/shared/component/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  constructor(public searchService: SearchService,private router: Router, public globals: Globals , public headerService: HeaderService) { }

  ngOnInit(): void {}

  paginate(url){
    this.headerService.loadMore(url).subscribe(
      res => {

          this.globals.searchData = JSON.parse(JSON.stringify(res)).data;
  
          console.log(this.globals.searchData);
          this.globals.stop();
                    
      },
      err => {
          console.log(err);
          this.globals.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message ;
      }
    )
  }

}
