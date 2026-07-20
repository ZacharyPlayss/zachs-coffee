import { gsap, ScrollTrigger } from "../../lib/gsap.js";

const grounds = document.querySelector("#coffee-grounds-top-view");
const portafilter = document.querySelector("#Portafilter");

const groundsState = { rotateX: 0, opacity: 1};
const portafilterState = { rotateX: 90, rotateZ: 0, opacity: 0 };

function applyGrounds() {
  grounds.style.transform = `rotateX(${groundsState.rotateX}deg)`;
  grounds.style.opacity = groundsState.opacity;
}

function applyPortafilter() {
  portafilter.style.transform =
    `rotateX(${portafilterState.rotateX}deg) rotateZ(${portafilterState.rotateZ}deg)`;
  portafilter.style.opacity = portafilterState.opacity;
}

applyGrounds();
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

tl.to(groundsState, {
  rotateX: 90,
  duration: 0.4,
  ease: "power1.inOut",
  onUpdate: applyGrounds,
}, "swap")

.to(portafilterState, {
  rotateX: 0,
  duration: 0.4,
  ease: "power1.inOut",
  onUpdate: applyPortafilter,
}, "swap")

.to(groundsState, {
  opacity: 0,
  duration: 0.15,
  onUpdate: applyGrounds,
}, "swap+=0.15")
.to(portafilterState, {
  opacity: 1,
  duration: 0.15,
  onUpdate: applyPortafilter,
}, "swap+=0.15")


.to(portafilterState, {
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