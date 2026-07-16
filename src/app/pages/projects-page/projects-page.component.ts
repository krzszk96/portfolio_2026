import { Component } from '@angular/core';
import { StatusBadge } from '../../shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-projects-page',
  imports: [StatusBadge],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss'
})
export class ProjectsPage {}
