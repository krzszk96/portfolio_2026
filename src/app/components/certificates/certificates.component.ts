import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { StatusBadge } from '../../shared/components/status-badge/status-badge.component';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-certificates',
  imports: [StatusBadge],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Certificates {
  private portfolio = inject(PortfolioService);

  private data = toSignal(this.portfolio.load());

  readonly certificates = computed(() => this.data()?.certificates ?? []);
}
