export async function titleAnimation(options: {
  element: string
  delay?: boolean
}) {
  const lines = useSplitText(options.element)

  await nextTick()

  if (!lines) return

  return gsap.fromTo(
    lines,
    {
      yPercent: 105,
    },
    {
      ease: "button",
      yPercent: 0,
      stagger: 0.125,
      duration: 0.8,
      delay: options.delay ? 0.125 : 0,
      scrollTrigger: {
        trigger: options.element,
        start: "top bottom",
      },
    }
  )
}
