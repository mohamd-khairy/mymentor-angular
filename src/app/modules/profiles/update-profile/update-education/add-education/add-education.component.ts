import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/shared/store';
import { Globals } from 'src/app/globals';
import { NgForm } from '@angular/forms';
import { loadingSelector } from '../../store/education/selectors.selector';
import { ADDAction } from '../../store/education/actions.action';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {


  constructor(private store: Store<StoreInterface> , public globals: Globals) { }

  ngOnInit(): void {
  }

  education(formData: NgForm){
    this.globals.isLoading$ = this.store.select(loadingSelector);
    
    const newData = Object.assign({}, formData.value, {
      present: formData.value.present1 ? true : false,
    });

    delete newData.present1;
    
    this.store.dispatch(new ADDAction(newData));

    formData.reset()

  }

}
