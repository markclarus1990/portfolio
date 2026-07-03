export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  type: string;
  highlights: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "cloud" | "tools" | "mobile";
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  _honeypot?: string;
}
