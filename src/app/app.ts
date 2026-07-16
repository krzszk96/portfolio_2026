import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Navbar } from './components/navbar/navbar.component';
import { Sidebar } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.routerState.snapshot.root.fragment;
        if (fragment) {
          setTimeout(() => {
            const el = document.getElementById(fragment);
            if (el) {
              const navbarHeight = 80;
              const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }, 100);
        }
      });
  }
}
