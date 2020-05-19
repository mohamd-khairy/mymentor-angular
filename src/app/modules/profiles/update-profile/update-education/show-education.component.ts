import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from 'src/app/globals';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/shared/store';
import { loadingSelector, EducationsDataSelector } from '../store/education/selectors.selector';
import { LOADALLACTION } from '../store/education/actions.action';

@Component({
  selector: 'app-show-education',
  templateUrl: './show-education.component.html',
  styleUrls: ['./show-education.component.css']
})
export class ShowEducationComponent implements OnInit {

  public educations$ : Observable<any>;

  constructor(private globals: Globals, private store: Store<StoreInterface>) { }

  ngOnInit(): void {
    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new LOADALLACTION()) // educations
    this.educations$ = this.store.select(EducationsDataSelector);
  }
}
