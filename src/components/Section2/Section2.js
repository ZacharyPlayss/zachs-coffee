import { gsap, ScrollTrigger } from "../../lib/gsap.js";

gsap.set("#panel-2", { opacity: 0, scale: 0.7, transformOrigin: "center center" });
gsap.set("#panel-2 .speech-bubble", { opacity: 0 });

gsap.timeline({
  scrollTrigger: {
    trigger: ".panel-two",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
})

  .to("#panel-2", {
    opacity: 1,
    scale: 1,
    ease: "back.out(1.7)",
  }, 0.3)
  .to("#panel-2 .speech-bubble", {
    opacity: 1,
    y: 0,
    ease: "power2.out",
  }, 0.6);