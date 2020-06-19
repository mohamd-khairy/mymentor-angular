import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from '../../../../shared/store';
import { ISkill } from '../store/states/states.state';
import { BehaviorSubject, Observable } from 'rxjs';
import { Globals } from 'src/app/globals';
import { ProfileService } from '../profile.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() skills$: Observable<ISkill>;
  @Input() profile$: Observable<any>;
  @Input() job$: Observable<any>;
  @Input() countRates: number;

  public CLIENT_ID = environment.zoom_client_id;
  public REDIRECT_URI = environment.zoom_redirect_url;


  constructor(private store: Store<StoreInterface>, public globals: Globals, private profileService: ProfileService) {
  }

  ngOnInit(): void {
  }

}
