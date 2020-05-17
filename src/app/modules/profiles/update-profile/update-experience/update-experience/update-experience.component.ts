import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DELETEACTION , UPDATEACTION, LOADACTION } from '../../store/actions.action';
import { Observable } from 'rxjs';
import { loadingSelector, ExperienceDataSelector } from '../../store/selectors.selector';
import { Globals } from 'src/app/globals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateExperienceComponent implements OnInit {

  public experienceId;
  public experienceData;

  constructor(private store: Store , public globals: Globals , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.experienceId = this.route.snapshot.params.id;
    this.get_one_experience();

    this.store.select(ExperienceDataSelector).subscribe(data => {
        this.experienceData = data;
    })
  }

  get_one_experience(){
    this.globals.isLoading$ = this.store.select(loadingSelector);

    this.store.dispatch(new LOADACTION(this.experienceId));
  }

  update_experience(formData: NgForm){
    
    this.globals.isLoading$ = this.store.select(loadingSelector);

    const newData = Object.assign({}, formData.value, {
      present: formData.value.present1 ? true : false,
    });

    delete newData.present1;
    
    this.store.dispatch(new UPDATEACTION(newData));

    formData.reset()
  }

  deleteExperience(id){
    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new DELETEACTION(id));
  }
}
