import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Skills {
  private portfolio = inject(PortfolioService);

  private data = toSignal(this.portfolio.load());

  readonly categories = computed(() => this.data()?.skills ?? []);
}
