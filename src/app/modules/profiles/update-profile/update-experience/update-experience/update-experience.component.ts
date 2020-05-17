import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ADDAction } from '../../store/actions.action';
import { Observable } from 'rxjs';
import { loadingSelector } from '../../store/selectors.selector';
import { Globals } from 'src/app/globals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateExperienceComponent implements OnInit {

  public experienceId;

  constructor(private store: Store , public globals: Globals , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.experienceId = this.route.snapshot.params.id;
    console.log( this.experienceId);
  }

  experience(formData: NgForm){
    this.globals.isLoading$ = this.store.select(loadingSelector);

    let start_date = '1-'+formData.value.start_month+'-'+formData.value.start_year;
    let end_date = formData.value.present1 ?  null : '1-'+formData.value.end_month+'-'+formData.value.end_year;

    const newData = Object.assign({}, formData.value, {
      present:    formData.value.present1 ? true : false,
      start_date: start_date ,
      end_date:   end_date
    });

    delete newData.present1;
    delete newData.start_month;
    delete newData.start_year;
    delete newData.end_month;
    delete newData.end_year;
    
    this.store.dispatch(new ADDAction(newData));
  }
}
