import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EventsComponent } from './landing-page/events/events.component';
import { HomeComponent } from './landing-page/home/home.component';
import { OnlineClassPageComponent } from './landing-page/online-class-page/online-class-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'events', component: EventsComponent },
      { path: 'online-class/:id', component: OnlineClassPageComponent },
    ]
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
