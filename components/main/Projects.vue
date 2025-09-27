<template>
  <div class="projects">
    <div class="bg" ref="bgRef" />

		<p class="title h6">Projects</p>

    <nuxt-link
      v-for="({ name, type, photosList, link }, i) in projects"
      :key="i"
      :to="link"
      class="item"
      @mouseenter="onEnter"
      @mouseleave="onLeave"
    >
      <div class="content">
        <div class="count p1">
          {{ String(i + 1).padStart(2, "0") }}
        </div>

        <div v-for="(photo, idx) in photosList" :key="idx" class="photo">
          <img :src="photo" class="inner-img" alt="" />
        </div>

        <div class="info">
          <p class="p1">{{ name }}</p>
          <p class="p1">{{ type }}</p>
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
const bgRef = ref<HTMLDivElement | null>(null);

const onEnter = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement | null;
  if (!bgRef.value || !target) return;

  const y = target.offsetTop;

  gsap.to(bgRef.value, {
    y,
		scaleY: 1,
    duration: 0.35,
    overwrite: "auto",
  });
};

const onLeave = () => {
  if (!bgRef.value) return;
  gsap.to(bgRef.value, {
    scaleY: 0,
    duration: 0.25,
    overwrite: "auto",
  });
};

const projects = [
  {
    name: "Neo-Terraform chronicles",
    type: "Music Video",
    photosList: [
      "/images/project1/1.png",
      "/images/project1/2.png",
      "/images/project1/3.png",
      "/images/project1/4.png",
    ],
    link: "/neo-terraform-chronicles",
  },
  {
    name: "Coperni Glass",
    type: "Mixed Media",
    photosList: [
      "/images/project2/1.png",
      "/images/project2/2.png",
      "/images/project2/3.png",
      "/images/project2/4.png",
    ],
    link: "/coperni-glass",
  },
  {
    name: "G Beauty",
    type: "Music Video",
    photosList: [
      "/images/project3/1.png",
      "/images/project3/2.png",
      "/images/project3/3.png",
      "/images/project3/4.png",
    ],
    link: "/g-beauty",
  },
  {
    name: "Neo-Terraform chronicles",
    type: "Music Video",
    photosList: [
      "/images/project4/1.png",
      "/images/project4/2.png",
      "/images/project4/3.png",
      "/images/project4/4.png",
    ],
    link: "/neo-terraform-chronicles",
  },
	{
    name: "Neo-Terraform chronicles",
    type: "Music Video",
    photosList: [
      "/images/project1/1.png",
      "/images/project1/2.png",
      "/images/project1/3.png",
      "/images/project1/4.png",
    ],
    link: "/neo-terraform-chronicles",
  },
  {
    name: "Coperni Glass",
    type: "Mixed Media",
    photosList: [
      "/images/project2/1.png",
      "/images/project2/2.png",
      "/images/project2/3.png",
      "/images/project2/4.png",
    ],
    link: "/coperni-glass",
  },
  {
    name: "G Beauty",
    type: "Music Video",
    photosList: [
      "/images/project3/1.png",
      "/images/project3/2.png",
      "/images/project3/3.png",
      "/images/project3/4.png",
    ],
    link: "/g-beauty",
  },
  {
    name: "Neo-Terraform chronicles",
    type: "Music Video",
    photosList: [
      "/images/project4/1.png",
      "/images/project4/2.png",
      "/images/project4/3.png",
      "/images/project4/4.png",
    ],
    link: "/neo-terraform-chronicles",
  },
];
</script>

<style scoped lang="scss">
.projects {
  position: relative;
  margin-top: 18.75rem;
  padding-bottom: 2rem;
}

.item {
  position: relative;
  display: flex;
  overflow: hidden;
  transition: color 0.15s var(--default-ease);
  z-index: 1;
}

.content {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  padding: 0.5rem 1.5rem;
  width: 100%;
  position: relative;
}

.photo {
  position: relative;
  height: 7.625rem;
}
.count {
  text-align: right;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8.625rem;
  transform: translateY(0) scaleY(0);
  background: var(--c-accent);
  pointer-events: none;
  will-change: transform;
  z-index: 0;
}

@include hover {
  .item:hover {
    color: var(--c-dark);
  }
}
.title {
	position: absolute;
	top: 0;
	left: 1.5rem;
}
</style>
