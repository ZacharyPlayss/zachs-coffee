import { gsap, ScrollTrigger } from "../../lib/gsap.js";

gsap.timeline({
  scrollTrigger: {
    trigger: ".panel-five",
    start: "top top",
    end: "+=1500",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
});