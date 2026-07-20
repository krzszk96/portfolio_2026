import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface GitHubContributionResponse {
  total: Record<string, number>;
  contributions: {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }[];
}

@Injectable({ providedIn: 'root' })
export class GithubService {
  private http = inject(HttpClient);

  getContributions(username: string): Observable<GitHubContributionResponse> {
    return this.http.get<GitHubContributionResponse>(
      `${environment.githubApiUrl}/${username}?y=last`
    ).pipe(
      retry({ count: 2, delay: 1000 }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let message = 'Failed to load GitHub contributions.';

    if (error.status === 0) {
      message = 'Network error — unable to reach GitHub contributions API.';
    } else if (error.status === 429) {
      message = 'Rate limited — too many requests to GitHub contributions API.';
    } else if (error.status >= 500) {
      message = 'GitHub contributions API is temporarily unavailable.';
    }

    console.error('[GithubService]', message, error);
    return throwError(() => new Error(message));
  }
}
