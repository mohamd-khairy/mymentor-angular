import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './global-modules/search/search.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
  },
  {
    path: 'global',
    loadChildren: () => import('./global-modules/global-modules.module').then(m => m.GlobalModulesModule)
  },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
