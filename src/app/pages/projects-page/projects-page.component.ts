import { Component, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProjectCard } from '../../shared/components/project-card/project-card.component';
import { Spinner } from '../../shared/components/spinner/spinner.component';
import { PortfolioService } from '../../shared/services/portfolio.service';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCard, Spinner],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPage {
  private portfolio = inject(PortfolioService);

  private data = toSignal(this.portfolio.load());

  readonly loading = computed(() => this.data() === undefined);
  readonly workProjects = computed(() => this.data()?.projects.work ?? []);
  readonly personalProjects = computed(() => this.data()?.projects.personal ?? []);
}
