"use client";

import React from "react";
import Particles from "@/components/Particles";
import { useMediaQuery } from "@/hooks/use-media-query";

const ConditionalParticles = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Se for celular, mostra 30 partículas. Se for desktop, mostra 100.
  const particleQuantity = isMobile ? 30 : 100;

  return (
    <Particles
      className="fixed inset-0 -z-10 animate-fade-in"
      quantity={particleQuantity}
    />
  );
};

export default ConditionalParticles;
