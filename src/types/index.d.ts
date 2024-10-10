import { ReactElement } from 'react';

export type AppConfig = {
  name: string;
  title: string;
  description: string;
  links: {
    x: string;
    github: string;
  }
}

export interface NavItem {
  title: string;
  value: string;
  icon: ReactElement;
}

export interface NavConfig {
  bottomNavbar: NavItem[];
}
