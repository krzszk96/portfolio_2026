import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StatusBadge } from '../../shared/components/status-badge/status-badge.component';

@Component({
  selector: 'app-experience-page',
  imports: [StatusBadge],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencePage {}
