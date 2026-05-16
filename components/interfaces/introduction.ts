import type { ReactNode } from "react";

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
}
