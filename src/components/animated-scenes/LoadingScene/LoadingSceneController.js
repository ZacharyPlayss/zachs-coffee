import { gsap } from "../../../lib/gsap";

const originalDrip = document.querySelector("#cofee-drip");
const splashTemplate = document.querySelector("#loading-splash-template");

if (originalDrip && splashTemplate) {
  const svg = originalDrip.parentNode;
  const coffeeCup = svg.querySelector("#coffee-cup");
  gsap.set(originalDrip, { opacity: 0 });
  gsap.set(splashTemplate, { opacity: 0 });

  const motionPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  motionPath.setAttribute("id", "loading-drip-motion-path");
  motionPath.setAttribute("d", "M1001.464,730 Q998,950 1001,1220");
  motionPath.setAttribute("fill", "none");
  motionPath.setAttribute("stroke", "none");
  svg.insertBefore(motionPath, coffeeCup);

  const dripCount = 3;
  const dripInterval = 0.5;
  const fallDuration = 0.6;
  const cycleDuration = 2.5;

  for (let i = 0; i < dripCount; i++) {
    const drip = originalDrip.cloneNode(true);
    drip.id = `loading-drip-clone-${i}`;
    drip.style.opacity = 0;
    svg.insertBefore(drip, coffeeCup);

    const splash = splashTemplate.cloneNode(true);
    splash.id = `loading-splash-${i}`;
    svg.insertBefore(splash, coffeeCup);

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
