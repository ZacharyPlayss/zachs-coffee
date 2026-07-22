import { gsap } from "../../../lib/gsap";

//TODO: integradte coffee needle animation.

const originalDrip = document.querySelector("#Coffee-drip");
const splashTemplate = document.querySelector("#coffee-splash-template");

if (originalDrip && splashTemplate) {
  const parentNode = originalDrip.parentNode;
  gsap.set(originalDrip, { opacity: 0 });
  gsap.set(splashTemplate, { opacity: 0 });

  const motionPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  motionPath.setAttribute("id", "coffee-drip-motion-path");
  motionPath.setAttribute("d", "M1179.732,908.757 Q1175,1000 1172,1105");
  motionPath.setAttribute("fill", "none");
  motionPath.setAttribute("stroke", "none");
  parentNode.appendChild(motionPath);

  const dripCount = 3;
  const dripInterval = 0.6;
  const fallDuration = 0.5;
  const cycleDuration = 2.2;

  for (let i = 0; i < dripCount; i++) {
    const drip = originalDrip.cloneNode(true);
    drip.id = `coffee-drip-clone-${i}`;
    drip.style.opacity = 0;
    parentNode.appendChild(drip);

    const splash = splashTemplate.cloneNode(true);
    splash.id = `coffee-splash-${i}`;
    parentNode.appendChild(splash);

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