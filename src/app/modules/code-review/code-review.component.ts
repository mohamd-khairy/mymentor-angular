import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Globals } from 'src/app/globals';
import { CodeReviewService } from './services/CodeReview.service';
import { BehaviorSubject } from 'rxjs';
import { RequestSTATUSACTION } from '../my-request/store/actions.action';
import { loadingSelector } from '../my-request/store/selectors.selector';

@Component({
  selector: 'app-code-review',
  templateUrl: './code-review.component.html',
  styleUrls: ['./code-review.component.css']
})
export class CodeReviewComponent implements OnInit {

  private _codeReviewInProgress = new BehaviorSubject(null);
  private _codeReviewPending = new BehaviorSubject(null);
  private _codeReviewCompleted = new BehaviorSubject(null);
  private _codeReviewCanceled = new BehaviorSubject(null);

  public codeReviewsInProgress$ = this._codeReviewInProgress.asObservable();
  public codeReviewsPending$ = this._codeReviewPending.asObservable();
  public codeReviewsCompleted$ = this._codeReviewCompleted.asObservable();
  public codeReviewsCanceled$ = this._codeReviewCanceled.asObservable();

  constructor(private store: Store, public globals: Globals, private codeReviewService: CodeReviewService) { }

  ngOnInit(): void {
    this.globals.start();
    this.get_codeReview('inProgress');
    this.get_codeReview('pending');
    this.get_codeReview('completed');
    this.get_codeReview('canceled');
  }

  get_codeReview(status) {
    this.codeReviewService.get_CodeReview_meeting_for_mentor(this.globals.userData.id, status).subscribe(
      (data) => {

        if (JSON.parse(JSON.stringify(data)).data) {
          if (status == 'inProgress') {
            this._codeReviewInProgress.next(JSON.parse(JSON.stringify(data)).data);
          } else if (status == 'pending') {
            this._codeReviewPending.next(JSON.parse(JSON.stringify(data)).data);
          } else if (status == 'completed') {
            this._codeReviewCompleted.next(JSON.parse(JSON.stringify(data)).data);
          } else if (status == 'canceled') {
            this._codeReviewCanceled.next(JSON.parse(JSON.stringify(data)).data);
          }
          this.globals.stop();
        }
      }
    )
  }

  response_request(id, status) {
    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new RequestSTATUSACTION(id, { status: status }));
  }
}
