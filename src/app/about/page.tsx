"use client";
import React, { useEffect, useState } from "react";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiJavascript,
  SiKubuntu,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";
import { config } from "@/data/config";

// ... (o resto do arquivo, como as listas de CONTATOS e FERRAMENTAS, continua o mesmo)

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          {/* O conteúdo do aside continua o mesmo */}
        </aside>
        <main className="basis-3/4 w-full">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">Sobre mim</h1>
            <p className="mb-10 text-roboto">
              Olá! Eu sou o Vitor, um Desenvolvedor com experiência em DevOps e
              gerenciamento de Banco de Dados. Tenho vivência prática em
              implantação e automação de fluxos de trabalho, e em colaboração
              com clientes estrangeiros. Possuo fortes habilidades analíticas,
              comunicação eficaz e uma abordagem orientada para a equipe para
              impulsionar melhorias de processo e entregar resultados.
            </p>
            <p className="mb-10">
              Quando não estou codando, você pode me encontrar explorando novas
              tecnologias, ou tomando um café enquanto planejo meu próximo
              projeto.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Ferramentas que uso</h1>
            {/* O conteúdo do carrossel de ferramentas continua o mesmo */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
