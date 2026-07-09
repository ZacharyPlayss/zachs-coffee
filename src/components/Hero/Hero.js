import { gsap, ScrollTrigger, SplitText } from "../../lib/gsap.js";

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

  