import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradComponent } from './dashborad/dashborad.component';
import { MentorsComponent } from './mentors/mentors.component';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from '../layouts/master/master.component';
import { HttpClientModule } from '@angular/common/http';
import { SessionsComponent } from './sessions/sessions.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { EducationDataComponent } from './education-data/education-data.component';
import { ExperienceDataComponent } from './experience-data/experience-data.component';
import { PaymentDataComponent } from './payment-data/payment-data.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsModule } from '@angular/forms';
import { Globals } from '../globals';
import { AddEducationDataComponent } from './education-data/add-education-data/add-education-data.component';
import { AddExperienceDataComponent } from './experience-data/add-experience-data/add-experience-data.component';

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
      },
      {
        path: 'session',
        component: SessionsComponent
      },
      {
        path: 'user/personal-data',
        component: PersonalDataComponent
      },
      {
        path: 'user/education-data',
        component: EducationDataComponent,
      },
      {path: 'user/education-data/add', component: AddEducationDataComponent},
      {
        path: 'user/experience-data',
        component: ExperienceDataComponent
      },
      {path: 'user/experience-data/add', component: AddExperienceDataComponent},
      {
        path: 'user/payment-data',
        component: PaymentDataComponent
      },
      {
        path: 'user/settings',
        component: SettingsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboradComponent,
    MentorsComponent,
    SessionsComponent,
    PersonalDataComponent,
    EducationDataComponent,
    ExperienceDataComponent,
    PaymentDataComponent,
    SettingsComponent,
    AddEducationDataComponent,
    AddExperienceDataComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [Globals ]
})
export class ModulesModule { }
