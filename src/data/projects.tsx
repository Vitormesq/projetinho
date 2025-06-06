import { ReactNode } from "react";
// Arquivo de projetos esvaziado conforme solicitado.
// Você pode adicionar seus projetos aqui no futuro.

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [];

export default projects;
