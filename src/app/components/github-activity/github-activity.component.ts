import { Component, ChangeDetectionStrategy, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import { GithubService } from '../../shared/services/github.service';
import {
  ContributionWeek,
  MonthLabel,
  WeekCell,
  mapContributionResponse
} from './github-activity.helper';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-github-activity',
  imports: [NgClass],
  templateUrl: './github-activity.component.html',
  styleUrl: './github-activity.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GithubActivity implements OnInit {
  private githubService = inject(GithubService);
  private destroyRef = inject(DestroyRef);

  weeks = signal<ContributionWeek[]>([]);
  totalContributions = signal(0);
  loading = signal(true);
  error = signal(false);
  months = signal<MonthLabel[]>([]);

  dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', ''];

  ngOnInit() {
    this.githubService.getContributions(environment.githubUsername)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (data) => {
          const graph = mapContributionResponse(data);
          this.weeks.set(graph.weeks);
          this.months.set(graph.months);
          this.totalContributions.set(graph.totalContributions);
          this.loading.set(false);
        },
        error: () => {
          this.error.set(true);
          this.loading.set(false);
        }
      });
  }

  getCellClass(cell: WeekCell): string {
    if (!cell) return 'activity__cell--empty';
    return `activity__cell--level-${cell.level}`;
  }

  getTooltip(cell: WeekCell): string {
    if (!cell) return '';
    const date = new Date(cell.date + 'T00:00:00');
    const formatted = date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    return `${cell.count} contribution${cell.count !== 1 ? 's' : ''} on ${formatted}`;
  }
}
