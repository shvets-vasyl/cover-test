import type { TransitionProps } from "vue"

export default defineNuxtRouteMiddleware(async (to, from) => {
	if (import.meta.client) {
    const { close } = useToggleMenu()
    close()
  }

  const transitionDone = useState("transition-done")
  const duration = 0.6

  to.meta.pageTransition = { ...(to.meta.pageTransition as TransitionProps) }
  from.meta.pageTransition = {
    ...(from.meta.pageTransition as TransitionProps),
  }

  if (from.meta.pageTransition) {
    ;(from.meta.pageTransition as TransitionProps).onLeave = async (
      el: Element,
      done
    ) => {
      useLockScroll(true)
      transitionDone.value = false

      const tl = gsap.timeline({
        onComplete() {
          ScrollTrigger.getAll().filter((st) => {
            if (st.trigger && st.trigger.closest(".page-leave-to")) {
              st.kill()
            }
          })
          done()
        },
      })

			tl.set(".loader", {
				autoAlpha: 1
			})

      tl.fromTo(
        ".loader",
        { yPercent: 105 },
        {
          yPercent: 0,
          duration,
        },
        "<"
      )
    }
  }

  if (to.meta.pageTransition) {
    ;(to.meta.pageTransition as TransitionProps).onEnter = async (
      el: Element,
      done
    ) => {
      gsap.to(".loader", {
        autoAlpha: 0,
        duration,
        onComplete() {
          transitionDone.value = true
          useLockScroll(false)
        },
      })

      setTimeout(() => {
        done()
      }, 200)
    }
  }
})
