import { gsap, ScrollTrigger } from "../../lib/gsap.js";


const milkCan = document.querySelector("#milk-can");
const noArt = document.querySelector("#coffee-base-no-art");
const art = document.querySelector("#latte-art");


if (noArt && art) {
  gsap.set([noArt, art], { scale: 0, transformOrigin: "50% 50%" });
  gsap.set(noArt, { opacity: 1 });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".panel-five",
        start: "top top",
        end: "+=1500",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })
    .to([noArt, art], {
      scale: 1,
      ease: "sine.inOut",
      duration: 1,
    }, 0)
    .to(noArt, {
      opacity: 0.12,
      ease: "power1.in",
      duration: 0.85,
    }, 0.25)
}