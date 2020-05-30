import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreInterface } from 'src/app/shared/store';
import { Store } from '@ngrx/store';
import { Globals } from 'src/app/globals';
import { ActivatedRoute } from '@angular/router';
import { CodeReviewADDACTION, LOADAboutAction } from '../store/actions.action';
import { loadingSelector  , AllAboutDataSelector} from '../store/selectors.selector';
import { Observable, BehaviorSubject } from 'rxjs';
import { CodeReviewService } from '../services/CodeReview.service';

@Component({
  selector: 'app-add-code-review',
  templateUrl: './add-code-review.component.html',
  styleUrls: ['./add-code-review.component.css']
})
export class AddCodeReviewComponent implements OnInit {

  constructor(private store: Store<StoreInterface> , public globals: Globals 
    , private codeReviewService: CodeReviewService ,
     private route: ActivatedRoute) { }
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
      this.globals.modalDay = this.globals.week[day];
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

    if(formData.value.title == '' || formData.value.details == '' || formData.value.repository_url == ''){
      alert('there is field is empty !');
      return;
    }

    const newData = Object.assign({}, formData.value, {
      duration: this.durationTime != 'other' ? this.durationTime : formData.value.duration+" hour" ,
      day_ids: this.dayList,
      session_type: 'code review',
      user_give_id: this.userId,
      user_recieve_id: this.globals.userData.id,
      dateTime: this.globals.dateTimeList
    });

    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new CodeReviewADDACTION(newData));
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
