import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./profile/views/randy/randy')
        .then(m => m.Randy)
  },
  {
    path: '404',
    loadComponent: () =>
      import('./shared/pages/page-not-found/page-not-found')
        .then(m => m.PageNotFound)
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
