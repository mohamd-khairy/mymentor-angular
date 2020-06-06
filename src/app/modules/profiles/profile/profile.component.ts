import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadingAction } from './store/actions/educationActions.action';
import { Loading } from './store/actions/skillActions.action';
import { LOADINGACTIONEx } from './store/actions/experienceActions.action';
import { StoreInterface } from '../../../shared/store';
import { BehaviorSubject } from 'rxjs';
import { ProfileService } from './profile.service';
import { IEducationState, IExperienceState, ISkill } from './store/states/states.state';
import { ActivatedRoute, Router } from '@angular/router';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public countRates = 0;
  private userId;
  private _job = new BehaviorSubject<any>(null);
  private _education = new BehaviorSubject<IEducationState>(null);
  private _experience = new BehaviorSubject<IExperienceState>(null);
  private _profile = new BehaviorSubject<any>(null);
  private _rates = new BehaviorSubject<any>(null);
  private _skills = new BehaviorSubject<ISkill>(null);

  public job$ = this._job.asObservable();
  public education$ = this._education.asObservable();
  public experience$ = this._experience.asObservable();
  public profile$ = this._profile.asObservable();
  public rates$ = this._rates.asObservable();
  public skills$ = this._skills.asObservable();

  constructor(public store: Store<StoreInterface>, private router: Router, public globals:Globals ,
     private profileService: ProfileService , private route: ActivatedRoute) {     
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.userId;
    this.profile_data();
    this.job_data();
    this.education_data();
    this.experience_data();
    this.rates_data();
    this.skills_data();
  }

  profile_data(){
    this.profileService.get_profile_api(this.userId).subscribe(
      data => {
        this._profile.next(JSON.parse(JSON.stringify(data)).data)
      },
      error => {
        console.log(JSON.parse(JSON.stringify(error)));
        if(JSON.parse(JSON.stringify(error)).status == 400){
          alert("this action not allow to you !");
          this.router.navigateByUrl('/mentor');
        }
      }
    )
  }

  job_data(){
    this.profileService.get_job_details_api(this.userId).subscribe(
      data => this._job.next(JSON.parse(JSON.stringify(data)).data)
    )
  }

  education_data(){
    this.profileService.get_education_api(this.userId).subscribe(
      data => this._education.next(JSON.parse(JSON.stringify(data)).data)
    )
  }

  experience_data(){
    this.profileService.get_experience_api(this.userId).subscribe(
      data => this._experience.next(JSON.parse(JSON.stringify(data)).data)
    )
  }

  rates_data(){
    this.profileService.get_rates_api(this.userId).subscribe(
      data => {
        this.countRates = JSON.parse(JSON.stringify(data)).data.length;
        this._rates.next(JSON.parse(JSON.stringify(data)).data)
      }
    )
  }

  skills_data(){
    this.profileService.get_skills_api(this.userId).subscribe(
      data => this._skills.next(JSON.parse(JSON.stringify(data)).data)
    )
  }

}
