"use client";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Application, SPEObject } from "@splinetool/runtime";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePreloader } from "./preloader";

gsap.registerPlugin(ScrollTrigger);

const AnimatedBackground = () => {
  const { bypassLoading } = usePreloader();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const splineContainer = useRef<HTMLDivElement>(null);
  const [splineApp, setSplineApp] = useState<Application>();

  // A verificação agora é feita aqui. Se for mobile, o componente retorna um fundo simples sem 3D.
  if (isMobile) {
    return <div className="fixed inset-0 -z-10 bg-background" />;
  }

  return (
    <>
      <Suspense
        fallback={<div className="fixed inset-0 -z-10 bg-background" />}
      >
        <Spline
          ref={splineContainer}
          onLoad={(app: Application) => {
            setSplineApp(app);
            bypassLoading();
          }}
          scene="/assets/skills-keyboard.spline"
        />
      </Suspense>
    </>
  );
};

export default AnimatedBackground;
