"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";

export function AnimParticles() {
  const [init, setInit] = useState(false);
  const particlesInitCb = useCallback(async (engine: any) => {
    await loadStarsPreset(engine);
  }, []);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(particlesInitCb).then(() => {
      setInit(true);
    });
  }, [particlesInitCb]);

  if (init) {
    return (
      <div style={{ zIndex: -10 }} className="relative">
        <Particles
          className="-z-10 relative"
          options={{
            preset: "stars",
            background: {
              color: "transparent",
            },
            fullScreen: {
              zIndex: -1,
            },
          }}
        />
      </div>
    );
  }

  return <></>;
}
