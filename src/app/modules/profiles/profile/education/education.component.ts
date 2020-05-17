import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from '../../../../shared/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEducationState } from '../store/states/states.state';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  @Input() education$: Observable<IEducationState>;
  
  constructor(public store: Store<StoreInterface> , private profileService: ProfileService) {
  }

  ngOnInit(): void {
  }

}
