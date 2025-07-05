import type Lenis from "lenis"

export function useScrollTo(
  target: string | number,
  options?: { offset?: number; immediate?: boolean, duration?: number }
) {
  const lenis = useState<Lenis>("lenis")
  lenis.value.scrollTo(target, options)
}
