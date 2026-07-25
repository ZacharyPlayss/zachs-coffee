import { gsap } from "../../../lib/gsap";

const originalDrip = document.querySelector("#Coffee-drip");
const splashTemplate = document.querySelector("#coffee-splash-template");
const needle = document.querySelector("#needle");

if (originalDrip && splashTemplate) {
  const svg = originalDrip.parentNode;
  const portafilter = svg.querySelector("#Portafilter");
  gsap.set(originalDrip, { opacity: 0 });
  gsap.set(splashTemplate, { opacity: 0 });

  const motionPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  motionPath.setAttribute("id", "coffee-drip-motion-path");
  motionPath.setAttribute("d", "M1179.732,908.757 Q1175,1000 1172,1105");
  motionPath.setAttribute("fill", "none");
  motionPath.setAttribute("stroke", "none");
  svg.insertBefore(motionPath, portafilter);

  const dripCount = 3;
  const dripInterval = 0.6;
  const fallDuration = 0.5;
  const cycleDuration = 2.2;

  for (let i = 0; i < dripCount; i++) {
    const drip = originalDrip.cloneNode(true);
    drip.id = `coffee-drip-clone-${i}`;
    drip.style.opacity = 0;
    svg.insertBefore(drip, portafilter);

    const splash = splashTemplate.cloneNode(true);
    splash.id = `coffee-splash-${i}`;
    svg.insertBefore(splash, portafilter);

    gsap.set(drip, { transformOrigin: "50% 50%" });

    const tl = gsap.timeline({
      repeat: -1,
      delay: i * dripInterval,
      repeatDelay: cycleDuration - fallDuration,
    });

    tl.set(drip, { opacity: 1, scale: 1 })
      .to(drip, {
        scaleY: 1.3,
        scaleX: 0.85,
        duration: 0.15,
        ease: "sine.in",
      }, 0)
      .to(drip, {
        motionPath: {
          path: motionPath,
          align: motionPath,
          alignOrigin: [0.5, 0.5],
        },
        scaleY: 1.8,
        scaleX: 0.6,
        duration: fallDuration,
        ease: "power1.in",
      }, 0.15)
      .set(drip, { opacity: 0 }, 0.15 + fallDuration)
      .fromTo(splash,
        { opacity: 0.7, scaleX: 0.4, scaleY: 0.4, transformOrigin: "50% 50%" },
        { opacity: 0, scaleX: 1.4, scaleY: 0.7, duration: 0.35, ease: "power2.out" },
        0.15 + fallDuration
      );
  }
}

if (needle) {
  const needleTl = gsap.timeline({ repeat: -1 });

  needleTl
    .to(needle, {
      rotation: -15,
      transformOrigin: "50% 100%",
      duration: 0.8,
      ease: "power2.out",
    })
    .to(needle, {
      rotation: 25,
      duration: 1.2,
      ease: "sine.inOut",
    })
    .to(needle, {
      rotation: -5,
      duration: 0.6,
      ease: "power1.inOut",
    })
    .to(needle, {
      rotation: 35,
      duration: 0.4,
      ease: "power2.in",
    })
    .to(needle, {
      rotation: 10,
      duration: 0.3,
      ease: "sine.out",
    })
    .to(needle, {
      rotation: 0,
      duration: 0.5,
      ease: "power1.out",
    })
    .to(needle, {
      rotation: -20,
      duration: 1,
      ease: "sine.inOut",
    })
    .to(needle, {
      rotation: 40,
      duration: 0.6,
      ease: "power2.in",
    })
    .to(needle, {
      rotation: -8,
      duration: 0.4,
      ease: "sine.inOut",
    })
    .to(needle, {
      rotation: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });
}