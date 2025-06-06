import { ReactNode } from "react";
import {
  RiNextjsFill,
  RiReactjsFill,
  RiNodejsFill,
  // Adicione outros ícones de skills que precisar
} from "react-icons/ri";
import {
  SiDocker,
  SiPostgresql,
  SiTypescript,
  // Adicione outros ícones de skills que precisar
} from "react-icons/si";

// Definições de Skills (adicione as que seu projeto "Share" usa)
const PROJECT_SKILLS = {
  next: { title: "Next.js", icon: <RiNextjsFill /> },
  react: { title: "React.js", icon: <RiReactjsFill /> },
  nodejs: { title: "Node.js", icon: <RiNodejsFill /> },
  typescript: { title: "TypeScript", icon: <SiTypescript /> },
  docker: { title: "Docker", icon: <SiDocker /> },
  postgres: { title: "PostgreSQL", icon: <SiPostgresql /> },
  // Adicione mais skills conforme necessário
};

export type Skill = {
  title: string;
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

const projects: Project[] = [
  // MOLDE PARA O NOVO PROJETO - Preencha com as informações
  {
    id: "share",
    category: "Ferramenta Web", // Ou a categoria que você preferir
    title: "Share",
    src: "/assets/projects-screenshots/share/card.png", // Imagem principal
    screenshots: ["01.png", "02.png"], // Outras screenshots
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.typescript], // Exemplo
      backend: [PROJECT_SKILLS.nodejs], // Exemplo
    },
    live: "https://vitormesq.github.io/Share/",
    github: "https://github.com/Vitormesq/Share", // Se tiver
    get content() {
      return (
        <div>
          {/* AQUI VAI A DESCRIÇÃO DETALHADA DO SEU PROJETO */}
          <p className="font-mono">
            Descreva aqui o que seu projeto faz, como funciona, etc.
          </p>
        </div>
      );
    },
  },
  // Seus outros projetos viriam aqui...
];

export default projects;
