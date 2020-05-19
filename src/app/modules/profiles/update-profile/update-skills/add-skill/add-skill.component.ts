import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/shared/store';
import { ADDAction } from '../../store/skill/actions.action';
import { Globals } from 'src/app/globals';
import { loadingSelector } from '../../store/skill/selectors.selector';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  selectedFile: File

  constructor(private store: Store<StoreInterface>, public globals: Globals) { }

  ngOnInit(): void {
  }

  addSkill(formData: NgForm){    
    this.globals.isLoading$ = this.store.select(loadingSelector);
    const file = new FormData();

    if(this.selectedFile){
      file.append('photo', this.selectedFile , this.selectedFile.name);  
      file.append('skill_name', formData.value.skill_name);  
      file.append('experience_years', formData.value.experience_years);  
      file.append('details', formData.value.details);  
    }
    this.store.dispatch(new ADDAction(file));
  }


 

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
}
