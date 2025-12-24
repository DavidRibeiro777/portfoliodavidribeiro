import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}