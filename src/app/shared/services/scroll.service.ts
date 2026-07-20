import { Injectable, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private navbarHeight = 80;

  init() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const fragment = this.router.routerState.snapshot.root.fragment;
        if (fragment) {
          this.scrollToFragment(fragment);
        }
      });
  }

  private scrollToFragment(fragment: string) {
    setTimeout(() => {
      const el = document.getElementById(fragment);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - this.navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  }
}
