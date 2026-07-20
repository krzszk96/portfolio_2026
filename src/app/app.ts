import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, filter } from 'rxjs';
import { NavigationEnd } from '@angular/router';
import { Navbar } from './components/navbar/navbar.component';
import { Sidebar } from './components/sidebar/sidebar.component';
import { ScrollService } from './shared/services/scroll.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  private router = inject(Router);
  private scrollService = inject(ScrollService);

  isOverview = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map(e => e.urlAfterRedirects === '/' || e.urlAfterRedirects === '')
    ),
    { initialValue: true }
  );

  constructor() {
    this.scrollService.init();
  }
}
