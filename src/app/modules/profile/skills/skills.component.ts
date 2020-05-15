import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISkill } from '../store/states/states.state';
import { StoreInterface } from '../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private _skills = new BehaviorSubject<Array<ISkill>>(null);
  public skills$ = this._skills.asObservable();

  constructor(public store: Store<StoreInterface>) { 
    this.store.select(state => state).subscribe((data) => {    
      console.log(data);
   
      this._skills.next(data.skill);
     })
  }

  ngOnInit(): void {
  }

}
