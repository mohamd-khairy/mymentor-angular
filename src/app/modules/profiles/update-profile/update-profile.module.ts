import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UpdateProfileComponent } from './update-profile.component';
import { UpdateAboutComponent } from './update-about/update-about.component';
import { MasterComponent } from 'src/app/layouts/master/master.component';
import { ShowSkillsComponent } from './update-skills/show-skills.component';
import { ShowExperienceComponent } from './update-experience/show-experience.component';
import { UpdateEducationComponent } from './update-education/update-education.component';
import { UpdateSocialComponent } from './update-social/update-social.component';
import { UpdateExperienceComponent } from './update-experience/update-experience/update-experience.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddExperienceComponent } from './update-experience/add-experience/add-experience.component';
import { AddSkillComponent } from './update-skills/add-skill/add-skill.component';
import { UpdateSkillComponent } from './update-skills/update-skill/update-skill.component';

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
          {path: 'skills',component: ShowSkillsComponent},
          {path: 'skill/:id',component: UpdateSkillComponent},
          {path: 'experiences',component: ShowExperienceComponent},
          {path: 'experience/:id',component: UpdateExperienceComponent},
          {path: 'educations',component: UpdateEducationComponent},
          {path: 'socials',component: UpdateSocialComponent},
        ]
      },
      {
        path: 'mentor/profile/add',
        component: UpdateProfileComponent,
        children:[
          {path: '',redirectTo: 'about',pathMatch: 'full'},
          {path: 'experience',component: AddExperienceComponent},
          {path: 'skill',component: AddSkillComponent},
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    UpdateAboutComponent,
    ShowSkillsComponent,
    ShowExperienceComponent,
    UpdateEducationComponent,
    UpdateSocialComponent,
    UpdateExperienceComponent,
    AddExperienceComponent,
    AddSkillComponent,
    UpdateSkillComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class UpdateProfileModule { }
