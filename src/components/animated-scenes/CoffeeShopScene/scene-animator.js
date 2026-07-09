import { gsap } from "../../../lib/gsap.js"

const steamDuration = 4;

gsap.to("#outside-lights-bulbs-even", {
  opacity: 0.6,
  duration: "random(0.3, 0.7)",
  repeat: -1,
  yoyo: true,
  ease: "rough({ strength: 1, points: 10, template: 'none', taper: 'none', randomize: true })",
});

gsap.to("#outside-lights-bulbs-odd", {
  opacity: 0.45,
  duration: "random(0.2, 0.6)",
  repeat: -1,
  yoyo: true,
  ease: "rough({ strength: 1.2, points: 8, template: 'none', taper: 'none', randomize: true })",
});


const ambientTimeline = gsap.timeline({
  repeat: -1,
  yoyo: false,
});

ambientTimeline.to("#steam", {
  y: -40,
  scaleX: 1.8,
  scaleY: 1.4,
  duration: steamDuration,
  ease: "sine.out",
}, 0);

ambientTimeline.to("#steam", {
  opacity: 0.6,
  duration: steamDuration * 0.15,
  ease: "power1.out"
}, 0);

ambientTimeline.to("#steam", {
  opacity: 0,
  duration: steamDuration * 0.85,
  ease: "sine.in"
}, steamDuration * 0.15);

gsap.set("#cofee-machine", { transformOrigin: "bottom center" });

function createMachineShake(duration) {
  const tl = gsap.timeline();
  const shakeSpeed = 0.05;
  const totalShakes = Math.floor(duration / shakeSpeed);

  for (let i = 0; i < totalShakes; i++) {
    tl.to("#cofee-machine", {
      x: "random(-1, 1)",
      y: "random(-0.5, 0.5)",
      rotation: "random(-0.5, 0.5)",
      duration: shakeSpeed,
      ease: "none"
    });
  }

  tl.to("#cofee-machine", { x: 0, y: 0, rotation: 0, duration: 0.05 });
  return tl;
}

ambientTimeline.add(createMachineShake(steamDuration), 0);