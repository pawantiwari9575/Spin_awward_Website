gsap.to("#videoplyr", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 2,
    pin: "#main",
  },
  width: "100%",
});

gsap.to("#one", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  left: "-400px",
  opacity: 0,
});

gsap.to("#holdr1", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  left: "-400px",
  opacity: 0,
});

gsap.to("#sx", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  right: "-400px",
  opacity: 0,
});

gsap.to("#holdr2", {
  scrollTrigger: {
    trigger: "#main",
    start: "top top",
    scrub: 3,
  },
  right: "-400px",
  opacity: 0,
});
