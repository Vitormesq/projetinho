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
  const [splineApp, setSplineApp] = useState<Application>();
  const [activeSection, setActiveSection] = useState<Section>("hero");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const router = useRouter();

  const handleSetActiveSection = useCallback(
    (section: Section) => {
      setActiveSection(section);
      const hash = section === "hero" ? "" : `#${section}`;
      router.push("/" + hash, { scroll: false });
    },
    [router]
  );

  // Efeitos e lógica...
  useEffect(() => {
    if (splineApp && !isLoading) {
      const keyboard = splineApp.findObjectByName("keyboard");
      if (keyboard) keyboard.visible = true;
    }
  }, [splineApp, isLoading]);

  useEffect(() => {
    if (isMobile || !splineApp) return;

    const keyboard = splineApp.findObjectByName("keyboard");
    if (!keyboard) return;

    const targetState = STATES[activeSection]?.desktop;
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
  }, [activeSection, splineApp, isMobile]);

  useEffect(() => {
    if (isMobile || !splineApp) return;
    const sections = [
      {
        id: "#skills",
        onEnter: () => handleSetActiveSection("skills"),
        onLeaveBack: () => handleSetActiveSection("hero"),
      },
      {
        id: "#projects",
        onEnter: () => handleSetActiveSection("projects"),
        onLeaveBack: () => handleSetActiveSection("skills"),
      },
      {
        id: "#contact",
        onEnter: () => handleSetActiveSection("contact"),
        onLeaveBack: () => handleSetActiveSection("projects"),
      },
    ];
    const triggers = sections.map(({ id, onEnter, onLeaveBack }) => {
      return ScrollTrigger.create({
        trigger: id,
        start: "top center",
        onEnter,
        onLeaveBack,
      });
    });
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [splineApp, isMobile, handleSetActiveSection]);

  if (isMobile) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-tl from-black via-zinc-600/20 to-black" />
    );
  }

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
        // CORREÇÃO: Movendo a lógica de interação para os eventos do Spline
        onKeyDown={(e: SplineEvent) => {
          const target = e.target as { name: string }; // Dizendo ao TypeScript que target tem 'name'
          const skill = SKILLS[target.name as SkillNames];
          if (skill) {
            setSelectedSkill(skill);
            splineApp?.setVariable("heading", skill.label);
            splineApp?.setVariable("desc", skill.shortDescription);
          }
        }}
        onKeyUp={() => {
          setSelectedSkill(null);
          splineApp?.setVariable("heading", "");
          splineApp?.setVariable("desc", "");
        }}
        scene="/assets/skills-keyboard.spline"
      />
    </Suspense>
  );
};

export default AnimatedBackground;
