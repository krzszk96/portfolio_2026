import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { StatusBadge } from '../status-badge/status-badge.component';
import { ExperienceItem } from '../../data/portfolio.model';

@Component({
  selector: 'app-experience-card',
  imports: [StatusBadge],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceCard {
  item = input.required<ExperienceItem>();
}
