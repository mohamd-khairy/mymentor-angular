import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISkill } from '../store/states/states.state';
import { StoreInterface } from '../../../../shared/store';
import { Store } from '@ngrx/store';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() skills$ : Observable<ISkill>;


  constructor(public store: Store<StoreInterface> , private profileService: ProfileService) { 
  }

  ngOnInit(): void {
  }

}
