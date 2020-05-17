import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from '../layouts/master/master.component';
import { DashboradComponent } from '../modules/dashborad/dashborad.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent
      },
  
    ]
  }
];

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes), 
  ]
})
export class GlobalModulesModule { }
