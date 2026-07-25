import { gsap, ScrollTrigger } from "../../lib/gsap.js";

const portafilter = document.querySelector("#Portafilter");

const portafilterState = { rotateZ: 0 };

function applyPortafilter() {
  portafilter.style.transform = `rotateZ(${portafilterState.rotateZ}deg)`;
}

applyPortafilter();

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".panel-three",
    start: "top top",
    end: "+=1800",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
});

tl.to(portafilterState, {
  rotateZ: -18,
  duration: 0.12,
  ease: "power1.inOut",
  onUpdate: applyPortafilter,
})
.to(portafilterState, {
  rotateZ: 14,
  duration: 0.12,
  ease: "power1.inOut",
  onUpdate: applyPortafilter,
})
.to(portafilterState, {
  rotateZ: 0,
  duration: 0.18,
  ease: "elastic.out(1, 0.55)",
  onUpdate: applyPortafilter,
});