import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './dashborad/dashborad.component';
import { MentorsComponent } from './mentors/mentors.component';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from '../layouts/master/master.component';

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
    RouterModule.forChild(routes)
  ]
})
export class ModulesModule { }
