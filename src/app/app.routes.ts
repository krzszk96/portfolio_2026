import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/overview/overview.component').then(m => m.Overview) },
  { path: 'experience', loadComponent: () => import('./pages/experience-page/experience-page.component').then(m => m.ExperiencePage) },
  { path: 'projects', loadComponent: () => import('./pages/projects-page/projects-page.component').then(m => m.ProjectsPage) },
  { path: '**', redirectTo: '' }
];
