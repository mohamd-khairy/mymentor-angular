import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() rates$ : Observable<any>;
  @Input() profile$ : Observable<any>;
  @Input() countRates : number;

  constructor(public globals: Globals) { }

  ngOnInit(): void {
  }

}
