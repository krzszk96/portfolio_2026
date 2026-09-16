import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ExperienceCard } from '../../shared/components/experience-card/experience-card.component';
import { Spinner } from '../../shared/components/spinner/spinner.component';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-experience-page',
  imports: [ExperienceCard, Spinner],
  templateUrl: './experience-page.component.html',
  styleUrl: './experience-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencePage {
  private portfolio = inject(PortfolioService);

  private data = toSignal(this.portfolio.load());

  readonly loading = computed(() => this.data() === undefined);
  readonly experience = computed(() => this.data()?.experience ?? []);
}
