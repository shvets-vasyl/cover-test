import Lenis from "lenis"

export default defineNuxtPlugin(() => {
  const lenis = useState("lenis", () => {
    return new Lenis({
      duration: 1.2,
      orientation: "vertical",
      smoothWheel: true,
    })
  })
  lenis.value.on("scroll", ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.value.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)
})
