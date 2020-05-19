import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/shared/store';
import { Globals } from 'src/app/globals';
import { ActivatedRoute } from '@angular/router';
import { EducationsDataSelector, loadingSelector } from '../../store/education/selectors.selector';
import { LOADACTION, UPDATEACTION, DELETEACTION } from '../../store/education/actions.action';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent implements OnInit {

  public educationId;
  public educationData;

  constructor(private store: Store<StoreInterface> , public globals: Globals , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.educationId = this.route.snapshot.params.id;
    this.get_one_education();

    this.store.select(EducationsDataSelector).subscribe(data => {
        this.educationData = data;
    })
  }

  get_one_education(){
    this.globals.isLoading$ = this.store.select(loadingSelector);

    this.store.dispatch(new LOADACTION(this.educationId));
  }

  update_education(formData: NgForm){
    
    this.globals.isLoading$ = this.store.select(loadingSelector);

    const newData = Object.assign({}, formData.value, {
      present: formData.value.present1 ? true : false,
    });

    delete newData.present1;
    
    this.store.dispatch(new UPDATEACTION(newData , newData.id));

    formData.reset()
  }

  deleteEducation(id){
    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new DELETEACTION(id));
  }
}
