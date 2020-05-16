import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IimageState } from '../store/states/states.state';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() rates$ : Observable<any>;
  @Input() image$ : Observable<IimageState>;

  constructor(public globals: Globals) { }

  ngOnInit(): void {
  }

}
