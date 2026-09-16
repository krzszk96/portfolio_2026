import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, shareReplay } from 'rxjs/operators';
import { Portfolio } from '../data/portfolio.model';
import { PORTFOLIO_DATA } from '../data/portfolio.data';

const SIMULATED_LATENCY_MS = 600;

/**
 * Serves portfolio content as an Observable to mimic a real API (in-memory,
 * fetched once). Swap to `HttpClient.get<Portfolio>(...)` for a live backend.
 *
 * TODO: when swapped for a real endpoint, add error handling — consumers treat
 * `undefined` as "loading", so a failed request would leave the spinner hanging.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly portfolio$: Observable<Portfolio> = of(PORTFOLIO_DATA).pipe(
    delay(SIMULATED_LATENCY_MS),
    shareReplay({ bufferSize: 1, refCount: false })
  );

  load(): Observable<Portfolio> {
    return this.portfolio$;
  }
}
