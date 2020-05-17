import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from './update-profile.component';
import { UpdateAboutComponent } from './update-about/update-about.component';
import { MasterComponent } from 'src/app/layouts/master/master.component';
import { UpdateSkillsComponent } from './update-skills/update-skills.component';
import { UpdateExperienceComponent } from './update-experience/update-experience.component';
import { UpdateEducationComponent } from './update-education/update-education.component';
import { UpdateSocialComponent } from './update-social/update-social.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: 'mentor/profile/update',
        component: UpdateProfileComponent,
        children:[
          {path: '',redirectTo: 'about',pathMatch: 'full'},
          {path: 'about',component: UpdateAboutComponent},
          {path: 'skills',component: UpdateSkillsComponent},
          {path: 'experiences',component: UpdateExperienceComponent},
          {path: 'educations',component: UpdateEducationComponent},
          {path: 'socials',component: UpdateSocialComponent},
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    UpdateAboutComponent,
    UpdateSkillsComponent,
    UpdateExperienceComponent,
    UpdateEducationComponent,
    UpdateSocialComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UpdateProfileModule { }
