import { gsap, ScrollTrigger, SplitText } from "../../lib/gsap.js";



const split = SplitText.create("#title", { type: "chars" });

gsap.set(split.chars, { yPercent: 100, opacity: 0 });



gsap.timeline({

  scrollTrigger: {

    trigger: ".hero",

    start: "top top",

    end: "+=1200",

    scrub: 1,

    pin: true,

    anticipatePin: 1,

  },

})

  .to(".hero-frame", {

    scale: 0.75,

    borderWidth: 10,

    borderRadius: 24,

    boxShadow: "0px 40px 80px rgba(0,0,0,0.35)",

    ease: "power2.inOut",

  }, 0)

  .to(".hero", {

    backgroundColor: "#f4ede1",

    ease: "power2.inOut",

  }, 0)

  .to(".hero-copy", {

    opacity: 1,

    pointerEvents: "auto",

    ease: "power1.in",

  }, 0.15)

  .to(split.chars, {

    yPercent: 0,

    opacity: 1,

    stagger: 0.02,

    ease: "back.out(1.7)",

  }, 0.2)

  .from("#subtitle", {

    opacity: 0,

    y: 20,

  }, 0.5);