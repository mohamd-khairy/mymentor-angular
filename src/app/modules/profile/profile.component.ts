import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadingAction } from './store/actions/educationActions.action';
import { Loading } from './store/actions/skillActions.action';
import { LOADINGACTIONEx } from './store/actions/experienceActions.action';
import { StoreInterface } from './store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public store: Store<StoreInterface>) {     
    this.store.dispatch(new LoadingAction()) // education
    this.store.dispatch(new LOADINGACTIONEx()) // experience
    this.store.dispatch(new Loading()) // skill
  }

  ngOnInit(): void {
  }

}
