import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { StatusBadge } from '../status-badge/status-badge.component';
import { WebLink } from '../web-link/web-link.component';
import { Project } from '../../data/portfolio.model';

@Component({
  selector: 'app-project-card',
  imports: [StatusBadge, WebLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectCard {
  project = input.required<Project>();
  personal = input(false);
}
