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
  intro: string;
  highlights: string[];
}

export type ContactMetaType = 'education' | 'location' | 'email';

export interface ContactMeta {
  type: ContactMetaType;
  label: string;
  href: string | null;
}

export type SocialPlatform = 'github' | 'linkedin';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
  ariaLabel: string;
}

export interface Contact {
  name: string;
  bio: string;
  meta: ContactMeta[];
  socials: SocialLink[];
}

export interface SkillTag {
  label: string;
  dot: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillTag[];
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  status: { label: string; variant: StatusVariant };
}

export interface EducationItem {
  title: string;
  subtitle: string;
  detail: string;
}

export interface PortfolioProjects {
  work: Project[];
  personal: Project[];
}

export interface Portfolio {
  about: About;
  contact: Contact;
  skills: SkillCategory[];
  certificates: Certificate[];
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: PortfolioProjects;
}
