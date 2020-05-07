import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModulesModule } from 'src/app/modules/modules.module';
import { MasterComponent } from './master.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ModulesModule,
    RouterModule,
    MatProgressBarModule
  ]
})
export class MasterModule { }
