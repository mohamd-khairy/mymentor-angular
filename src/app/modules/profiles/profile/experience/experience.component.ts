import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from '../../../../shared/store';
import { IExperienceState } from '../store/states/states.state';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() experience$ : Observable<IExperienceState>;

  constructor(public store: Store<StoreInterface> , private profileService: ProfileService) { 
  }

  ngOnInit(): void {
  }
}
