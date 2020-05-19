import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/shared/store';
import { LOADALLACTION } from '../store/skill/actions.action';
import { SkillDataSelector , loadingSelector } from '../store/skill/selectors.selector';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-show-skills',
  templateUrl: './show-skills.component.html',
  styleUrls: ['./show-skills.component.css']
})
export class ShowSkillsComponent implements OnInit {

  public skills$ : Observable<any>;

  constructor(private store: Store<StoreInterface>,private globals: Globals) { }

  ngOnInit(): void {
    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new LOADALLACTION());
    this.skills$ = this.store.select(SkillDataSelector);
  }

}
