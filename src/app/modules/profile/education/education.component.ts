import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from '../store';
import { BehaviorSubject } from 'rxjs';
import { IEducationState } from '../store/states/states.state';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  private _education= new BehaviorSubject<Array<IEducationState>>(null);
  public education$ = this._education.asObservable();

  constructor(public store: Store<StoreInterface>) {
    this.store.select(state => state).subscribe(data => {   
      console.log(data);
          
      this._education.next(data.education); 
    })
  }

  ngOnInit(): void {
  }

}
