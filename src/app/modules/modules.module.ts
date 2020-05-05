import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './dashborad/dashborad.component';
import { MentorsComponent } from './mentors/mentors.component';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from '../layouts/master/master.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboradComponent
      },
      {
        path: 'mentor',
        component: MentorsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboradComponent,
    MentorsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class ModulesModule { }
