import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { RedirectIfAuthGuard } from '../guards/redirect-if-auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate:[RedirectIfAuthGuard],
    children: [
      {path: 'login',component: LoginComponent},
      {path: 'register',component: RegisterComponent},
      {path: 'forgot-password' , component: ForgetPasswordComponent},
      {path: 'reset-password/:token' , component: ResetPasswordComponent},
      {path: 'verify-email' , component: VerifyEmailComponent}
    ]
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetPasswordComponent, ResetPasswordComponent, VerifyEmailComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
