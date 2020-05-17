import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IExperienceState } from '../../profile/store/states/states.state';
import { ProfileService } from '../../profile/profile.service';

@Component({
  selector: 'app-show-experience',
  templateUrl: './show-experience.component.html',
  styleUrls: ['./show-experience.component.css']
})
export class ShowExperienceComponent implements OnInit {
  private _experience = new BehaviorSubject<IExperienceState>(null);
  public experience$ = this._experience.asObservable();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.experience_data();
  }


  experience_data(){
    this.profileService.get_experience_api().subscribe(
      data => this._experience.next(JSON.parse(JSON.stringify(data)).data)
    )
  }

}
