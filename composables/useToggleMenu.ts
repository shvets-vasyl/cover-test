export const useToggleMenu = () => {
	const openMenuState = useState<boolean>("open-menu")

	const open = () => {
		openMenuState.value = true
    useLockScroll(true)

		const tl = gsap.timeline()
		tl.set(".menu-wrap", {
			display: "block"
		})
		tl.to(".menu-bg", {
			opacity: 1,
		})
		tl.fromTo("menu.menu", {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
		}, {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			ease: "power3.inOut"
		}, "<")
	}

	const close = () => {
		openMenuState.value = false
    useLockScroll(false)

		const tl = gsap.timeline()
		tl.to(".menu-bg", {
			opacity:0,
		})
		tl.to("menu.menu", {
			clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
			ease: "power3.inOut"
		}, "<")
		tl.set(".menu-wrap", {
			display: "none"
		})
	}

	if (openMenuState.value) {
    close()
  } else {
  	open()
  }

	return {
		open,
		close
	}
}