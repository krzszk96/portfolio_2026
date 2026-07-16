import { Routes } from '@angular/router';
import { Overview } from './pages/overview/overview.component';
import { ExperiencePage } from './pages/experience-page/experience-page.component';
import { ProjectsPage } from './pages/projects-page/projects-page.component';

export const routes: Routes = [
  { path: '', component: Overview },
  { path: 'experience', component: ExperiencePage },
  { path: 'projects', component: ProjectsPage },
  { path: '**', redirectTo: '' }
];
