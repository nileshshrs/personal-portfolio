export interface ExperienceTag {
  label: string;
}

export interface ExperienceSubItem {
  startDate: string;
  endDate: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  link: string;
  description: string;
  tags: ExperienceTag[];
  subItems?: ExperienceSubItem[];
}
