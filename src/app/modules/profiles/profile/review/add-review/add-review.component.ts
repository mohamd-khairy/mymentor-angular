import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {ProfileService} from '../../profile.service';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/shared/store';
import { REVIEWADDACTION } from '../store/actions.action';
import { Globals } from 'src/app/globals';
import { loadingSelector } from '../store/selectors.selector';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

    stars: number[] = [1, 2, 3, 4, 5];
    selectedValue: number;
    userId: number;

    constructor(private route: ActivatedRoute , public globals: Globals ,
       private profileService: ProfileService , private store: Store<StoreInterface>) { }
    
    ngOnInit() {
      this.userId = this.route.snapshot.params.userId;
    }
    
    countStar(star) {
      this.selectedValue = star;
    }

    addReview(formData: NgForm){
      const newData = Object.assign({}, formData.value, {
        rate: this.selectedValue,
        user_rated_id: this.userId
      });
  
      this.globals.isLoading$ = this.store.select(loadingSelector);
      this.store.dispatch(new REVIEWADDACTION(newData));      
    }
}
