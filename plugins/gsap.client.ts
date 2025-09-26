import { gsap } from "gsap"
import {
  ScrollTrigger,
} from "gsap/all"

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(
    ScrollTrigger,
  )

	gsap.defaults({
    ease: "0.83, 0, 0.17, 1",
    duration: 0.6
  })
})
