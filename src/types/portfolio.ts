export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  availabilityBadge: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  discord?: string;
  formspreeId?: string;
  resumeUrl: string;
  avatarUrl: string;
  shortBio: string;
  fullBio: string[];
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  level: number; // 1-100 percentage
  category: 'Frontend' | 'Backend' | 'Cloud & Databases' | 'AI & Tools';
  tags: string[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'Full-Stack' | 'Cloud/DevOps' | 'AI & Data' | 'Open Source';
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  highlights: string[];
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    devops?: string[];
  };
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience' | 'hackathon' | 'achievement';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
  badge?: string;
  link?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  badgeIcon: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  stats: StatItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  timeline: TimelineItem[];
  certifications: CertificationItem[];
}
