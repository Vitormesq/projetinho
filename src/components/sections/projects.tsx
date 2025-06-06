"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto md:h-[130vh] min-h-[50vh] flex flex-col justify-center"
    >
      <Link href={"#projects"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-8"
          )}
        >
          Projetos
        </h2>
      </Link>
      <div className="text-center text-zinc-400">
        <p>Nenhum projeto para exibir no momento.</p>
        <p>Volte em breve!</p>
      </div>
    </section>
  );
};

export default ProjectsSection;
