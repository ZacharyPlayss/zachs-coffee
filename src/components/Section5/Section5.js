import { gsap, ScrollTrigger } from "../../lib/gsap.js";

const milkCan = document.querySelector("#milk-can");
const noArt = document.querySelector("#coffee-base-no-art");
const art = document.querySelector("#latte-art");
const panelContent = document.querySelector(".panel-five .panel-content");
const panelText = document.querySelector(".panel-five-text");

const isMobile = window.matchMedia("(max-width: 768px)").matches;

if (noArt && art && milkCan && panelContent && panelText) {
  gsap.set([noArt, art], { scale: 0, transformOrigin: "50% 50%" });
  gsap.set(noArt, { opacity: 1 });
  gsap.set(milkCan, { x: -700 });

  if (isMobile) {
    gsap.set(panelText, { opacity: 0, y: 30 });
    gsap.set(panelContent, { width: "100%" });
  } else {
    gsap.set(panelText, { width: "0%", opacity: 0, overflow: "hidden" });
    gsap.set(panelContent, { width: "100%" });
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel-five",
      start: "top top",
      end: "+=2500",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
    },
  });

  tl.add("enter")
    .add("fill", 1)
    .add("exit", 3);

  tl.to(milkCan, {
    x: 0,
    duration: 1,
    ease: "power2.out",
  }, "enter");

  tl.to([noArt, art], {
    scale: 1,
    duration: 2,
    ease: "sine.inOut",
  }, "fill");

  tl.to(noArt, {
    opacity: 0.12,
    duration: 1.5,
    ease: "power1.in",
  }, "fill+=0.5");

  tl.to(milkCan, {
    x: -700,
    duration: 1,
    ease: "power2.in",
  }, "exit");

  if (isMobile) {
    tl.to(panelText, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    }, "exit");
  } else {
    tl.to(panelContent, {
      width: "50%",
      duration: 1,
      ease: "power1.inOut",
    }, "exit");

    tl.to(panelText, {
      width: "50%",
      opacity: 1,
      overflow: "visible",
      duration: 1,
      ease: "power1.inOut",
    }, "exit");
  }
}
