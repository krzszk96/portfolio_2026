import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StatusBadge } from '../../shared/components/status-badge/status-badge.component';
import { WebLink } from '../../shared/components/web-link/web-link.component';

@Component({
  selector: 'app-projects-page',
  imports: [StatusBadge, WebLink],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPage {}
