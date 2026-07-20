import { describe, it, expect } from 'vitest';
import {
  mapContributionResponse,
  ContributionGraph,
  ContributionWeek,
  ContributionDay
} from './github-activity.helper';
import { GitHubContributionResponse } from '../../shared/services/github.service';

describe('github-activity.helper', () => {
  describe('mapContributionResponse', () => {
    it('should return empty weeks for empty contributions', () => {
      const data: GitHubContributionResponse = {
        total: { '2025': 0 },
        contributions: []
      };

      const result = mapContributionResponse(data);

      expect(result.weeks).toEqual([]);
      expect(result.months).toEqual([]);
      expect(result.totalContributions).toBe(0);
    });

    it('should extract totalContributions from lastYear key', () => {
      const data: GitHubContributionResponse = {
        total: { lastYear: 142, '2025': 100 },
        contributions: [{ date: '2025-01-05', count: 3, level: 2 }]
      };

      const result = mapContributionResponse(data);

      expect(result.totalContributions).toBe(142);
    });

    it('should fallback to last year key when lastYear is not present', () => {
      const data: GitHubContributionResponse = {
        total: { '2024': 50, '2025': 89 },
        contributions: [{ date: '2025-01-05', count: 1, level: 1 }]
      };

      const result = mapContributionResponse(data);

      expect(result.totalContributions).toBe(89);
    });

    it('should return 0 for empty total object', () => {
      const data: GitHubContributionResponse = {
        total: {},
        contributions: [{ date: '2025-01-05', count: 0, level: 0 }]
      };

      const result = mapContributionResponse(data);

      expect(result.totalContributions).toBe(0);
    });

    it('should group contributions into 7-day weeks', () => {
      // Use 14 consecutive days; regardless of starting day, all weeks should have 7 cells
      const contributions = Array.from({ length: 14 }, (_, i) => {
        const d = new Date(2025, 0, 5 + i);
        return {
          date: d.toISOString().split('T')[0],
          count: i,
          level: Math.min(4, i) as 0 | 1 | 2 | 3 | 4
        };
      });

      const data: GitHubContributionResponse = {
        total: { '2025': 14 },
        contributions
      };

      const result = mapContributionResponse(data);

      // Every week must have exactly 7 days (some may be null padding)
      for (const week of result.weeks) {
        expect(week.days).toHaveLength(7);
      }

      // Total non-null cells should equal contribution count
      const nonNull = result.weeks.flatMap(w => w.days).filter(d => d !== null);
      expect(nonNull).toHaveLength(14);
    });

    it('should pad first week with nulls if not starting on Sunday', () => {
      // 2025-01-01 — use the helper's own logic to determine padding
      const firstDate = new Date('2025-01-01T00:00:00');
      const expectedPadding = firstDate.getUTCDay();

      const data: GitHubContributionResponse = {
        total: { '2025': 2 },
        contributions: [
          { date: '2025-01-01', count: 1, level: 1 },
          { date: '2025-01-02', count: 2, level: 2 }
        ]
      };

      const result = mapContributionResponse(data);

      // First N cells should be null (padding)
      for (let i = 0; i < expectedPadding; i++) {
        expect(result.weeks[0].days[i]).toBeNull();
      }
      // First real contribution at index = padding
      expect(result.weeks[0].days[expectedPadding]).not.toBeNull();
      expect((result.weeks[0].days[expectedPadding] as ContributionDay).date).toBe('2025-01-01');
    });

    it('should pad last week with nulls to fill 7 days', () => {
      // Create 5 days — not enough to fill a week completely, so padding is guaranteed
      const data: GitHubContributionResponse = {
        total: { '2025': 5 },
        contributions: [
          { date: '2025-03-03', count: 1, level: 1 },
          { date: '2025-03-04', count: 1, level: 1 },
          { date: '2025-03-05', count: 1, level: 1 },
          { date: '2025-03-06', count: 1, level: 1 },
          { date: '2025-03-07', count: 1, level: 1 }
        ]
      };

      const result = mapContributionResponse(data);

      // Every week should have exactly 7 days
      for (const week of result.weeks) {
        expect(week.days).toHaveLength(7);
      }

      // Total cells (null + non-null) should be a multiple of 7
      const totalCells = result.weeks.flatMap(w => w.days);
      expect(totalCells.length % 7).toBe(0);

      // Should have some null padding (either at start or end)
      const nullCount = totalCells.filter(d => d === null).length;
      expect(nullCount).toBeGreaterThan(0);
    });

    it('should calculate month labels from week data', () => {
      // Create 2 months of contributions starting Jan 5 (Sunday)
      const contributions = Array.from({ length: 35 }, (_, i) => {
        const date = new Date(Date.UTC(2025, 0, 5 + i));
        return {
          date: date.toISOString().split('T')[0],
          count: i % 3,
          level: (i % 5) as 0 | 1 | 2 | 3 | 4
        };
      });

      const data: GitHubContributionResponse = {
        total: { '2025': 35 },
        contributions
      };

      const result = mapContributionResponse(data);

      expect(result.months.length).toBeGreaterThanOrEqual(2);
      expect(result.months[0].name).toBe('Jan');
      expect(result.months[1].name).toBe('Feb');
      expect(result.months[0].colStart).toBe(0);
    });
  });
});
