export interface ProjectTag {
  label: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  tags: ProjectTag[];
}
