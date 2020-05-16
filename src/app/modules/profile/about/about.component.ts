import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProfileService } from '../profile.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() job$ : Observable<any>;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

}
