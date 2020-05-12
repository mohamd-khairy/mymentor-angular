import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public errorMsg = '';
  public successMsg = '';

  public jobData ;
  // private _job = new BehaviorSubject<Array<any>>(null);
  // job$ = this._job.asObservable();

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.get_job_data();
  }

  get_job_data(){
    this.profileService.get_job_details_api().subscribe(
      (res) => { 
        console.log('the data:' , res);
        // this._job.next(JSON.parse(JSON.stringify(res)).data); 
        this.jobData = JSON.parse(JSON.stringify(res)).data; 
        this.successMsg = "Data returned Successfully";
      },
      (err) => {
        console.log(err);
        this.errorMsg = err.status == 422 ? err.error.errors[Object.keys(err.error.errors)[0]][0] : err.error.message ;
      } 
    );
  }
}
