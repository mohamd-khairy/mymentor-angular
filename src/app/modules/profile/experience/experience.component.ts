import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from '../store';
import { IExperienceState } from '../store/states/states.state';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  private _experiences = new BehaviorSubject<Array<IExperienceState>>(null);
  public experiences$ = this._experiences.asObservable();

  constructor(public store: Store<StoreInterface>) { 
    this.store.select(state => state).subscribe((data) => {  
      console.log(data);
         
      this._experiences.next(data.experience);
     })
  }

  ngOnInit(): void {
  }

}
