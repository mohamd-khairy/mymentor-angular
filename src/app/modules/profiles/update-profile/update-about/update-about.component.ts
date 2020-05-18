import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/shared/store';
import { LOADLanguagesAction, ADDABOUTAction , UPDATEABOUTACTION, LOADAboutAction } from '../store/about/actions.action';
import { UpdateProfileService } from '../update-profile.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { AllAboutDataSelector , loadingSelector } from '../store/about/selectors.selector';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-update-about',
  templateUrl: './update-about.component.html',
  styleUrls: ['./update-about.component.css']
})

export class UpdateAboutComponent implements OnInit {

  private _days = new BehaviorSubject<Array<any>>(null);
  private _lang = new BehaviorSubject<Array<any>>(null);

  public days$ = this._days.asObservable();
  public languages$ = this._lang.asObservable();

  public aboutData: any;

  constructor(private store: Store<StoreInterface>,
     private updateProfileService: UpdateProfileService,
     public globals: Globals
  ) {}

  ngOnInit(): void {
    this.getAboutData();
    this.getLanguages();
    this.getDays();    
  }

  UpdateAboutData(AboutForm: NgForm){
    this.globals.isLoading$ = this.store.select(loadingSelector);
    if(AboutForm.value.id == ""){
      delete AboutForm.value.id;
      this.store.dispatch(new ADDABOUTAction(AboutForm.value));
    }else{
      this.store.dispatch(new UPDATEABOUTACTION(AboutForm.value));
    }
  }

  getAboutData(){
    this.updateProfileService.get_about_api().subscribe(
        data => { 
          this.aboutData = JSON.parse(JSON.stringify(data)).data
        } 
    )
  }

  getLanguages(){
    this.updateProfileService.get_languages_api().subscribe(
      data => { this._lang.next(JSON.parse(JSON.stringify(data)).data)} 
    )
  }

  getDays(){
    this.updateProfileService.get_days_api().subscribe(
      data => { this._days.next(JSON.parse(JSON.stringify(data)).data)} 
    )
  }
}
