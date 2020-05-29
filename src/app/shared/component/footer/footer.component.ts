import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Globals } from 'src/app/globals';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('btnClose') btnClose : ElementRef 

  public week = {1:'saturday' , 2:'sunday' , 3:'monday' , 4:'tuesday' , 5: 'wednesday' , 6:'thursday' , 7:'friday'};

  constructor(public globals: Globals) { }

  ngOnInit(): void {
  }

  addDateTime(formData: NgForm){

    this.globals.dateTimeList[this.globals.modalDay] = formData.value.date+' '+ formData.value.time;
    formData.reset();
    this.btnClose.nativeElement.click();

  }
}
