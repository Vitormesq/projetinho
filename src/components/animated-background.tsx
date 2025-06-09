"use client";
import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Application, SPEObject, SplineEvent } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { Skill, SkillNames, SKILLS } from "@/data/constants";
import { sleep } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const STATES = {
  hero: {
    desktop: {
      scale: { x: 0.25, y: 0.25, z: 0.25 },
      position: { x: 400, y: -200, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
  skills: {
    desktop: {
      scale: { x: 0.4, y: 0.4, z: 0.4 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: 0, y: Math.PI / 12, z: 0 },
    },
  },
  projects: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 0, y: -40, z: 0 },
      rotation: { x: Math.PI, y: Math.PI / 3, z: Math.PI },
    },
  },
  contact: {
    desktop: {
      scale: { x: 0.3, y: 0.3, z: 0.3 },
      position: { x: 500, y: -250, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
    },
  },
};

type Section = "hero" | "skills" | "projects" | "contact";

const AnimatedBackground = () => {
  const { isLoading, bypassLoading } = usePreloader();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [keyboardRevealed, setKeyboardRevealed] = useState(false);
  const router = useRouter();

  // Todas as funções e hooks são declarados aqui no topo
  const keyboardStates = useCallback((section: Section) => {
    // Para mobile, sempre usamos a config de desktop para evitar erros, mas o componente não será renderizado
    return STATES[section]?.desktop;
  }, []);

  // Efeito para atualizar as variáveis do Spline quando uma skill é selecionada
  useEffect(() => {
    if (splineApp && activeSection === "skills") {
      if (selectedSkill) {
        splineApp.setVariable("heading", selectedSkill.label);
        splineApp.setVariable("desc", selectedSkill.shortDescription);
      } else {
        splineApp.setVariable("heading", "");
        splineApp.setVariable("desc", "");
      }
    }
  }, [selectedSkill, splineApp, activeSection]);

  // Efeito para configurar as animações de scroll
  useEffect(() => {
    if (isMobile || !splineApp) return;

    const keyboard = splineApp.findObjectByName("keyboard");
    if (!keyboard) return;

    const sections: Section[] = ["hero", "skills", "projects", "contact"];
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: `#${section}`,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => self.isActive && setActiveSection(section),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [splineApp, isMobile]);

  // Efeito que move o teclado
  useEffect(() => {
    if (isMobile || !splineApp || !activeSection) return;
    const keyboard = splineApp.findObjectByName("keyboard");
    if (!keyboard) return;
    const targetState = keyboardStates(activeSection);
    if (targetState) {
      gsap.to(keyboard.scale, {
        ...targetState.scale,
        duration: 1.5,
        ease: "power3.inOut",
      });
      gsap.to(keyboard.position, {
        ...targetState.position,
        duration: 1.5,
        ease: "power3.inOut",
      });
      gsap.to(keyboard.rotation, {
        ...targetState.rotation,
        duration: 1.5,
        ease: "power3.inOut",
      });
    }
  }, [activeSection, splineApp, isMobile, keyboardStates]);

  // Efeito para carregar os ícones (keycaps)
  useEffect(() => {
    if (isLoading || keyboardRevealed || !splineApp || isMobile) return;

    const revealKeyCaps = async () => {
      const kbd = splineApp.findObjectByName("keyboard");
      if (!kbd) return;
      kbd.visible = true;

      Object.values(SKILLS).forEach(async (skill, idx) => {
        const keycap = splineApp.findObjectByName(skill.name);
        if (keycap) {
          await sleep(idx * 40);
          keycap.visible = true;
          gsap.fromTo(
            keycap.position,
            { y: 200 },
            { y: 50, duration: 0.5, delay: 0.05, ease: "bounce.out" }
          );
        }
      });
      setKeyboardRevealed(true);
    };

    revealKeyCaps();
  }, [isLoading, keyboardRevealed, splineApp, isMobile]);

  // Se for mobile, não renderiza nada pesado
  if (isMobile) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-tl from-black via-zinc-600/20 to-black" />
    );
  }

  // Renderização final para Desktop
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 -z-10 bg-gradient-to-tl from-black via-zinc-600/20 to-black" />
      }
    >
      <Spline
        onLoad={(app: Application) => {
          setSplineApp(app);
          bypassLoading();
        }}
        // Adicionando os listeners de interação aqui
        onKeyDown={(e) => {
          const skill = SKILLS[e.target.name as SkillNames];
          if (skill) setSelectedSkill(skill);
        }}
        onKeyUp={() => setSelectedSkill(null)}
        scene="/assets/skills-keyboard.spline"
      />
    </Suspense>
  );
};

export default AnimatedBackground;
