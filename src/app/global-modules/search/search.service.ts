import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Globals } from 'src/app/globals';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/component/header/header.service';
import { SearchComponent } from './search.component';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public SearchComponent: SearchComponent;

  registerMyApp(myApp: SearchComponent) {
    this.SearchComponent = myApp;
  }

  public errorMsg = '';
  public successMsg = '';

  public searchData;

  public searchKey;

  constructor(private http: HttpClient, public globals: Globals, private router: Router , public headerService:HeaderService) { }

  getsearchData(formData) {

    this.search_api(formData).subscribe(
      res => {
        this.searchData = JSON.parse(JSON.stringify(res)).data;
        this.SearchComponent.stop();
        console.log(this.searchData);
        this.successMsg = "Search Data returned Successfully";
      },
      err => {
        console.log(err);
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message;
      }
    )
    this.searchKey = formData;
    this.router.navigateByUrl('/global/search');

  }

  search_api(q) {
    return this.http.get(environment.apiUrl + 'search?q=' + q)
      .pipe(catchError(this.errorHandler))
  }

  loadMore(nextPageUrl) {
    return this.http.get(nextPageUrl + '&q=' + this.searchKey)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
