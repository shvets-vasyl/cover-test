<template>
  <div class="preloader">
    <div class="dog">
      <svg
        class="left-side"
        viewBox="0 0 22 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.9545 10.887L21.1838 10.8623V20.5074H20.7683C19.2393 20.5074 19.2449 23.3678 19.4388 24.5793C20.1035 24.5793 20.4359 25.2555 20.519 25.5935H17.7769C15.5832 24.5117 15.3671 21.3675 15.5333 19.9307C11.7442 20.5392 11.2955 23.2833 11.5447 24.5793C12.2095 24.5793 12.4311 25.2555 12.4588 25.5935H9.79974C8.96879 24.692 7.17393 22.1958 6.64212 19.4235C6.11031 16.6513 8.02704 14.0988 9.05188 13.169C3.1355 9.92346 0.936251 3.30833 0.576172 0.406464C1.97217 6.22147 7.91625 10.3799 10.7138 11.7322C11.3121 11.1236 13.1235 10.9152 13.9545 10.887Z"
          fill="#E1321F"
        />
      </svg>
      <div class="line" />
      <svg
        class="right-side"
        viewBox="0 0 29 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.0648 5.03233C21.6358 1.84834 19.3505 1.72978 18.3865 2.06851C18.3298 1.95559 17.9102 1.59427 16.6853 1.05232C15.1542 0.374872 10.9012 2.74593 10.646 4.01614C10.4419 5.03231 11.6951 6.41542 12.3472 6.97996C12.1488 7.26223 11.5817 8.03 10.9012 8.84294C10.2207 9.65587 6.70489 9.8591 5.03203 9.8591H0.183594V19.5127H5.03203C5.03203 22.4935 6.16617 24.1419 6.73324 24.5935H10.3058C10.1016 24.1193 9.59694 23.9443 9.37011 23.9161C9.27236 23.9725 8.99935 23.7975 8.68938 22.6459C8.37941 21.4942 9.52424 20.7547 10.1354 20.5289C10.7006 22.6289 12.5258 24.1137 13.3677 24.5935H16.6851C16.6851 23.8483 15.7212 23.4362 15.2393 23.3233C13.6061 21.6975 13.8783 19.2587 14.2186 18.2425C16.1239 16.3456 17.0539 13.952 17.2807 12.9923C17.4792 13.4576 18.0973 14.3291 18.9819 14.0931C19.8666 13.8572 19.6908 11.7931 19.4923 10.7906C20.2295 10.5083 22.3333 9.94378 24.8511 9.94378C27.3689 9.94378 28.2819 8.02436 28.4236 7.06464L23.0648 5.03233Z"
          fill="#E1321F"
        />
      </svg>
    </div>
    <div class="percent h5">{{ percent }}%</div>
  </div>
</template>
<script setup lang="ts">

const { isDesktop } = useViewport()

const percent = ref(0);
const preloaderDone = useState<boolean>("preloader-done");

const dur = 2

const init = () => {
  const tl = gsap.timeline({
		delay: 0.5,
    onComplete() {
      preloaderDone.value = true;
      useLockScroll(false);
    },
  });
  tl.to(percent, {
    value: 100,
    duration: dur,
    onUpdate: () => {
      percent.value = Math.round(percent.value);
    },
  });
	tl.to(".preloader .line", {
		width: isDesktop.value ? "84.375rem" : "19rem",
		duration: dur,
	}, "<")
  tl.to(".preloader", {
    yPercent: 105
  })
};

onMounted(() => {
  init();
});
</script>
<style scoped lang="scss">
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #191919;
  z-index: var(--z-preloader);
  color: #e1321f;
}
.percent {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
}
.dog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: flex-end;
}
.left-side {
  width: 1.375rem;
  margin-right: -1px;
}
.right-side {
  width: 1.8125rem;
	margin-left: -1px;
}
.line {
	height: .5938rem;
	width: 0;
	background: #e1321f;
	position: relative;
	bottom: .3438rem;
}
</style>
