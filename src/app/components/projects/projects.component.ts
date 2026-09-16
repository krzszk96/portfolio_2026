import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { StatusBadge } from '../../shared/components/status-badge/status-badge.component';
import { Spinner } from '../../shared/components/spinner/spinner.component';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, StatusBadge, Spinner],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Projects {
  private portfolio = inject(PortfolioService);

  private data = toSignal(this.portfolio.load());

  readonly loading = computed(() => this.data() === undefined);
  readonly workProjects = computed(() => this.data()?.projects.work ?? []);
  readonly personalProjects = computed(() => this.data()?.projects.personal ?? []);
}
