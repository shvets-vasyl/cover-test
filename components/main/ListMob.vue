<template>
  <div class="list-mob">
    <p class="title h6">Projects</p>

    <div
      v-for="({ name, type, link, video }, i) in projects"
      :key="i"
      class="item"
      :class="{ active: activeIndex === i }"
    >
      <div class="head" @click="toggle(i)">
        <p class="count h6">{{ String(i + 1).padStart(2, "0") }}</p>
        <div class="info">
          <p class="name h6">{{ name }}</p>
          <p class="type p1">{{ type }}</p>
        </div>
      </div>

      <div class="body">
        <div class="body-wrap">
          <nuxt-link class="video" :to="link">
            <video
              class="inner-video"
              :src="video"
              preload="auto"
              playsinline
              loop
              muted
              autoplay
            />
          </nuxt-link>
          <nuxt-link class="more p1" :to="link"> More Info </nuxt-link>
        </div>
      </div>
      <div class="line" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { projects } from "@/data/projects"

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style scoped lang="scss">
.list-mob {
  display: none;
  @include mobile {
    display: block;
    padding: 8.125rem 0 6.5rem;
  }
}
.title {
  margin-left: 2.8125rem;
  margin-bottom: 1.5rem;
}
.head {
  display: grid;
  grid-template-columns: 2.8125rem 1fr;
  cursor: pointer;
}
.name {
  margin-bottom: 0.5rem;
}
.item {
  position: relative;
	padding: 1rem;
	transition: all .6s ease;
	color: var(--c-accent);
}
.item.active .body {
	max-height: 18rem;
}
.item.active {
	background: var(--c-accent);
	color: var(--c-dark);

}
.line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--c-accent);
  opacity: 0.3;
}
.body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.8s ease;
	color: var(--c-dark);
}
.body-wrap {
  padding-top: 1rem;
  padding-left: 2.8125rem;
}
.video {
  height: 10.4375rem;
  display: block;
  width: 100%;
  position: relative;
}
.more {
  margin-top: 1rem;
  padding-left: 0.5rem;
  position: relative;
}
.more:after {
  content: "";
  position: absolute;
  top: 0.4375rem;
  left: 0;
  width: 0.25rem;
  height: 0.25rem;
  border-radius: 100%;
  background: var(--c-dark);
}
</style>
