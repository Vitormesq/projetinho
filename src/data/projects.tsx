import { TypographyP } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import Image from "next/image";
import SlideShow from "@/components/slide-show";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visitar Site
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  html: { title: "HTML5", icon: <SiHtml5 /> },
  css: { title: "CSS3", icon: <SiCss3 /> },
  js: { title: "JavaScript", icon: <SiJavascript /> },
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
  {
    id: "share",
    category: "Ferramenta Web",
    title: "Share",
    src: "/assets/projects-screenshots/share/1.png",
    screenshots: ["1.png", "2.png"],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    live: "https://vitormesq.github.io/Share/",
    github: "https://github.com/Vitormesq/Share",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Uma aplicação web simples e eficiente para compartilhamento de
            arquivos e textos de forma rápida e segura.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[`${BASE_PATH}/share/1.png`, `${BASE_PATH}/share/2.png`]}
          />
        </div>
      );
    },
  },
];

export default projects;
