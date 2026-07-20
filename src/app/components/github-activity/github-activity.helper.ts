import { GitHubContributionResponse } from '../../shared/services/github.service';

export type ContributionLevel = 0 | 1 | 2 | 3 | 4;

export interface ContributionDay {
  date: string;
  count: number;
  level: ContributionLevel;
}

export type WeekCell = ContributionDay | null;

export interface ContributionWeek {
  days: WeekCell[];
}

export interface MonthLabel {
  name: string;
  colStart: number;
}

export interface ContributionGraph {
  weeks: ContributionWeek[];
  months: MonthLabel[];
  totalContributions: number;
}

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function mapContributionResponse(data: GitHubContributionResponse): ContributionGraph {
  const totalContributions = extractTotal(data.total);

  const contributions: ContributionDay[] = data.contributions.map((day) => ({
    date: day.date,
    count: day.count,
    level: day.level
  }));

  const weeks = groupIntoWeeks(contributions);
  const months = calculateMonths(weeks);

  return { weeks, months, totalContributions };
}

function extractTotal(total: Record<string, number> | undefined): number {
  if (!total) return 0;

  if ('lastYear' in total) {
    return total['lastYear'];
  }

  const years = Object.keys(total);
  if (years.length === 0) return 0;

  return total[years[years.length - 1]];
}

function groupIntoWeeks(contributions: ContributionDay[]): ContributionWeek[] {
  if (contributions.length === 0) {
    return [];
  }

  const weeks: ContributionWeek[] = [];
  let currentWeek: WeekCell[] = [];

  // Pad the first week if it doesn't start on Sunday
  const firstDate = new Date(contributions[0].date + 'T00:00:00');
  const firstDay = firstDate.getUTCDay();
  for (let i = 0; i < firstDay; i++) {
    currentWeek.push(null);
  }

  for (const day of contributions) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push({ days: currentWeek });
      currentWeek = [];
    }
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push({ days: currentWeek });
  }

  return weeks;
}

function calculateMonths(weeks: ContributionWeek[]): MonthLabel[] {
  const monthPositions: MonthLabel[] = [];
  let lastMonth = -1;

  weeks.forEach((week, index) => {
    const firstValidDay = week.days.find((d): d is ContributionDay => d !== null);
    if (firstValidDay) {
      const month = new Date(firstValidDay.date + 'T00:00:00').getUTCMonth();
      if (month !== lastMonth) {
        monthPositions.push({ name: MONTH_NAMES[month], colStart: index });
        lastMonth = month;
      }
    }
  });

  return monthPositions;
}
