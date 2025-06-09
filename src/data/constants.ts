export enum SkillNames {
  AWS = "aws",
  LINUX = "linux",
  GIT = "git",
  DOCKER = "docker",
  HTML = "html",
  CSS = "css",
  JS = "js",
  POSTGRES = "postgres",
  TS = "ts",
  REACT = "react",
  NEXTJS = "nextjs",
  NODEJS = "nodejs",
  GITHUB = "github",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Injetando código no DOM desde 95, sem brincadeira! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "O primo superdotado do JavaScript que está sempre se exibindo 💯🔒",
    color: "#007acc",
    icon: " /typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "O avô da internet, ainda mandando bem! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Estilizando com o máximo de estilo, sem erro 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use usando" 
usando use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "A rainha do drama dos frameworks front-end, e nós amamos! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "JavaScript disse 'brincadeirinha, sou backend agora', sério! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription: "SQL, mas com estilo, arrasou 💅🐘",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "O guarda-costas pessoal do código, sem caô! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "Deslizando naqueles pull requests, quem sabe sabe! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription:
      "O gerenciador de pacotes disse 'tô contigo, mano', e ponto final! 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "O melhor amigo do seu app, mas cuidado com o aprisionamento tecnológico! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription: "O vovô dos CMS, ainda de bengala e tudo 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Onde 'chmod 777' é a maior ostentação 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription: "A melhor containerização! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription: "Sempre exagerada, complicando tudo, e ponto final! 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Aviso: O modo claro emite um zilhão de lúmens de pura radiação!",
    "Cuidado: Modo claro à frente! Por favor, não tente isso em casa.",
    "Apenas profissionais treinados podem lidar com tanto brilho. Prossiga com óculos de sol!",
    "Prepare-se! O modo claro está prestes a fazer tudo brilhar mais que o seu futuro.",
    "Ligando o modo claro... Tem certeza de que seus olhos estão prontos para isso?",
  ],
  dark: [
    "Modo claro? Achei que você tinha enlouquecido... mas bem-vindo de volta ao lado sombrio!",
    "Mudando para o modo escuro... Como foi a vida no lado claro?",
    "Modo escuro ativado! Obrigado do fundo do meu coração, e dos meus olhos também.",
    "Bem-vindo de volta às sombras. Como foi a vida lá na luz?",
    "Modo escuro ativado! Finalmente, alguém que entende de verdadeira sofisticação.",
  ],
};
