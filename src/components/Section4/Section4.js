import { gsap, ScrollTrigger } from "../../lib/gsap.js";

const firstFrame = document.querySelector("#rotated-panel-frame-1");
const secondFrame = document.querySelector("#rotated-panel-frame-2");

if (firstFrame && secondFrame) {
  gsap.set(firstFrame, {
    opacity: 0,
    scale: 0.25,
    rotation: -5,
    yPercent: -20,
  });

  gsap.set(secondFrame, {
    opacity: 0,
    scale: 0.25,
    rotation: 4,
    yPercent: 20,
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel-four",
      start: "top top",
      end: "+=1500",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  tl.to(firstFrame, {
    opacity: 1,
    scale: 0.8,
    duration: 1,
    ease: "power1.inOut",
    onUpdate: typeof applyPortafilter === "function" ? applyPortafilter : undefined,
  }, 0)
    .to(secondFrame, {
      opacity: 1,
      scale: 0.8,
      duration: 1,
      ease: "power1.inOut",
    }, 0.3);
}