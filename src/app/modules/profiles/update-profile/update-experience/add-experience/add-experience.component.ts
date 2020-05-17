import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Globals } from 'src/app/globals';
import { loadingSelector } from '../../store/experience/selectors.selector';
import { NgForm } from '@angular/forms';
import { ADDAction } from '../../store/experience/actions.action';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  constructor(private store: Store , public globals: Globals) { }

  ngOnInit(): void {
  }

  experience(formData: NgForm){
    this.globals.isLoading$ = this.store.select(loadingSelector);
    
    const newData = Object.assign({}, formData.value, {
      present: formData.value.present1 ? true : false,
    });

    delete newData.present1;
    
    this.store.dispatch(new ADDAction(newData));

    formData.reset()

  }
}
