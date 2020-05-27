import { Component, OnInit } from '@angular/core';
import { RequestService } from './services/request.service';
import { BehaviorSubject } from 'rxjs';
import { Globals } from 'src/app/globals';
import { Store } from '@ngrx/store';
import { RequestSTATUSACTION } from './store/actions.action';
import { loadingSelector } from './store/selectors.selector';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {

  selectedIndex=0;
  
  private _PendingRequests = new BehaviorSubject(null);
  private _AcceptRequests = new BehaviorSubject(null);
  private _RejectRequests = new BehaviorSubject(null);

  public PendingRequests$ = this._PendingRequests.asObservable();
  public AcceptRequests$ = this._AcceptRequests.asObservable();
  public RejectRequests$ = this._RejectRequests.asObservable();

  constructor(private store: Store,public globals: Globals ,private requestService: RequestService) { }

  ngOnInit(): void {
    this.globals.start();
    this.get_my_pending_request_for_mentor(this.globals.userData.id);
    this.get_my_accept_request_for_mentor(this.globals.userData.id);
    this.get_my_reject_request_for_mentor(this.globals.userData.id);
  }

  get_my_pending_request_for_mentor(id){
    this.requestService.get_my_pending_request_for_mentor_api(id).subscribe(
     (data) => { 
       console.log(data);
       
        if(JSON.parse(JSON.stringify(data)).data){
          this._PendingRequests.next(JSON.parse(JSON.stringify(data)).data);
          this.globals.stop();
        }
      }   
    )
  }

  get_my_accept_request_for_mentor(id){
    this.requestService.get_my_accept_request_for_mentor_api(id).subscribe(
     (data) => { 
       console.log(data);
       
        if(JSON.parse(JSON.stringify(data)).data){
          this._AcceptRequests.next(JSON.parse(JSON.stringify(data)).data);
          this.globals.stop();
        }
      }   
    )
  }

  get_my_reject_request_for_mentor(id){
    this.requestService.get_my_reject_request_for_mentor_api(id).subscribe(
     (data) => { 
       console.log(data);
       
        if(JSON.parse(JSON.stringify(data)).data){
          this._RejectRequests.next(JSON.parse(JSON.stringify(data)).data);
          this.globals.stop();
        }
      }   
    )
  }

  response_request(id,status){    
    this.globals.isLoading$ = this.store.select(loadingSelector);
    this.store.dispatch(new RequestSTATUSACTION(id , {status: status}));
  }
}
