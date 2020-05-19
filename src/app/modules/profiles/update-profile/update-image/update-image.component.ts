import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/shared/store';
import { Globals } from 'src/app/globals';
import { loadingSelector, profileDataSelector } from '../store/profile/selectors.selector';
import { LOADACTION, UPDATEACTION } from '../store/profile/actions.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent implements OnInit {

  public profileData;
  public profile$ : Observable<any>;
  selectedFile: File

  constructor(private store: Store<StoreInterface>,private globals: Globals) { }

  ngOnInit(): void {
    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new LOADACTION());
    this.store.select(profileDataSelector).subscribe(data => {
        this.profileData = data;
    })
  }

  Update_profile(formData: NgForm){
    this.globals.isLoading$ = this.store.select(loadingSelector);
    const file = new FormData();

    if(this.selectedFile){
      file.append('photo', this.selectedFile , this.selectedFile.name);  
    }
    
    for (var key in formData.value) {
        if (formData.value.hasOwnProperty(key)) {
          file.append(key, formData.value[key]);
        }
    }
    
    this.store.dispatch(new UPDATEACTION(file , formData.value.id));
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
}
