import { StatusVariant } from '../components/status-badge/status-badge.component';

export type LangDot = 'typescript' | 'aws' | 'stripe';

export interface ProjectLang {
  label: string;
  dot: LangDot;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  status: { label: string; variant: StatusVariant };
  description: string;
  cardDescription: string;
  features: string[];
  webLink: string | null;
  tech: string[];
  langs: ProjectLang[];
  primaryStack: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  badgeVariant: StatusVariant;
  employmentType: string;
  dateRange: string;
  dateDotColor: string;
  project: string;
  cardDescription: string;
  responsibilities: string[];
  tech: string[];
}

export interface About {
  name: string;
  bio: string;
}

export interface PortfolioProjects {
  work: Project[];
  personal: Project[];
}

export interface Portfolio {
  about: About;
  experience: ExperienceItem[];
  projects: PortfolioProjects;
}
