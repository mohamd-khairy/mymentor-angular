import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from '../store';
import { IimageState, ISkill } from '../store/states/states.state';
import { BehaviorSubject, Observable } from 'rxjs';
import { Globals } from 'src/app/globals';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() skills$ : Observable<ISkill>;
  @Input() image$ : Observable<IimageState>;
  @Input() job$ : Observable<any>;


  constructor(private store: Store<StoreInterface> , public globals: Globals , private profileService: ProfileService) {
  }

  ngOnInit(): void {
  }

}
