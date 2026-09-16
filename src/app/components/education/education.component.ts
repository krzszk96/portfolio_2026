import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { StatusBadge } from '../../shared/components/status-badge/status-badge.component';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-education',
  imports: [StatusBadge],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Education {
  private portfolio = inject(PortfolioService);

  private data = toSignal(this.portfolio.load());

  readonly items = computed(() => this.data()?.education ?? []);
}
