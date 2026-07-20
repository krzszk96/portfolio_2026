import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private baseUrl = 'https://github-contributions-api.jogruber.de/v4';

  getContributions(username: string): Observable<GitHubContributionResponse> {
    return this.http.get<GitHubContributionResponse>(
      `${this.baseUrl}/${username}?y=last`,
      { headers: { 'Cache-Control': 'no-cache' } }
    );
  }
}
