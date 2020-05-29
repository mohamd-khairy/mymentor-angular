import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreInterface } from 'src/app/shared/store';
import { Store } from '@ngrx/store';
import { scheduleADDACTION } from '../store/actions.action';
import { loadingSelector } from '../store/selectors.selector';
import { Globals } from 'src/app/globals';
import { ActivatedRoute } from '@angular/router';
import { CodeReviewService } from '../../code-review/services/CodeReview.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  constructor(private store: Store<StoreInterface> , public globals: Globals
    , private codeReviewService: CodeReviewService 
    , private route: ActivatedRoute) { }

  public week = {1:'saturday' , 2:'sunday' , 3:'monday' , 4:'tuesday' , 5: 'wednesday' , 6:'thursday' , 7:'friday'};
  userId: number;
  dayList: Array<any> = [];
  public durationTime: any;

  private _about = new BehaviorSubject(null);
  public about$ = this._about.asObservable();
  
  ngOnInit(): void {
    this.userId = this.route.snapshot.params.userId;
    this.globals.start();
    this.getAboutData(this.userId);
  }

  days(day){
    
    if(this.dayList.indexOf(day) !== -1){ // found
      this.globals.modalDay = '';
      this.dayList.splice(this.dayList.indexOf(day) , 1);
    }else{ // notFound
      this.globals.modalDay = this.week[day];
      this.dayList.push(day);
    }
  }

  duration(time){
    this.durationTime = time;
  }

  schedule_meeting(formData: NgForm){
    if(this.dayList.length <= 0){
      alert('you should choose at least one day !');
      return;
    }

    if(this.durationTime == undefined || formData.value.duration == ''){
      alert('you should add duration time !');
      return;
    }

    if(formData.value.title == '' || formData.value.details == ''){
      alert('there is field is empty !');
      return;
    }

    const newData = Object.assign({}, formData.value, {
      duration: this.durationTime != 'other' ? this.durationTime : formData.value.duration+" hour" ,
      day_ids: this.dayList,
      session_type: 'learn',
      user_give_id: this.userId,
      user_recieve_id: this.globals.userData.id,
      dateTime: this.globals.dateTimeList
    });

    console.log(newData);
    
    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new scheduleADDACTION(newData));
  }

  getAboutData(id){
    this.codeReviewService.get_about_api(id).subscribe(
        data => { 
          if(JSON.parse(JSON.stringify(data)).data){
            this._about.next(JSON.parse(JSON.stringify(data)).data);
            this.globals.stop();
          }          
        } 
    )
  }
}
