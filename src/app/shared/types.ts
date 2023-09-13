export enum SelectedPage {
  HOME = "home",
  SKILLS = "skills",
  PROJECTS = "projects",
  TESTIMONIALS = "testimonials",
  CONTACT = "contact",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface MenuType {
  id: number;
  page: string;
  
}
