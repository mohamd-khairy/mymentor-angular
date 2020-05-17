import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AllExperienceDateSelector } from '../../profile/store/selectors/experienceSelectors.selector';
import { Store } from '@ngrx/store';
import { LOADALLACTION } from '../store/actions.action';
import { Globals } from 'src/app/globals';
import { loadingSelector, ExperienceDataSelector } from '../store/selectors.selector';

@Component({
  selector: 'app-show-experience',
  templateUrl: './show-experience.component.html',
  styleUrls: ['./show-experience.component.css']
})
export class ShowExperienceComponent implements OnInit {

  public experience$ : Observable<any>;

  constructor(private globals: Globals, private store: Store) { }

  ngOnInit(): void {
    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new LOADALLACTION()) // experience
    this.experience$ = this.store.select(ExperienceDataSelector);
  }

}
