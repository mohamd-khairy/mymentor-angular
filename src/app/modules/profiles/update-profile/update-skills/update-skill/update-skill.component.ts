import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreInterface } from 'src/app/shared/store';
import { Store } from '@ngrx/store';
import { Globals } from 'src/app/globals';
import { loadingSelector, SkillDataSelector } from '../../store/skill/selectors.selector';
import { LOADACTION, UPDATEACTION, DELETEACTION } from '../../store/skill/actions.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit {
  private skillId;
  public skillData;
  selectedFile: File

  constructor(private store: Store<StoreInterface>, public globals: Globals  , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.skillId = this.route.snapshot.params.id;
    this.get_one_skill();
  }

  get_one_skill(){
    this.globals.isLoading$ = this.store.select(loadingSelector);

    this.store.dispatch(new LOADACTION(this.skillId));

    this.store.select(SkillDataSelector).subscribe(data => {
        this.skillData = data;
    })
  }


  updateSkill(formData: NgForm){    
    this.globals.isLoading$ = this.store.select(loadingSelector);
    const file = new FormData();

    if(this.selectedFile){
      file.append('photo', this.selectedFile , this.selectedFile.name);  
    }
    
    file.append('skill_name', formData.value.skill_name);  
    file.append('experience_years', formData.value.experience_years);  
    file.append('details', formData.value.details);  
    
    this.store.dispatch(new UPDATEACTION(file , formData.value.id));
  }

  deleteSkill(id){
    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new DELETEACTION(id));
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
}
