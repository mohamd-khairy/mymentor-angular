import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
  },
  {
    path: 'global',
    loadChildren: () => import('./global-modules/global-modules.module').then(m => m.GlobalModulesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
