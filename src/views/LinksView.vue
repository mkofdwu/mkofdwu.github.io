<script setup lang="ts">
import { ref } from 'vue'
import MaterialIcon from '@/components/MaterialIcon.vue'
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import illustration from '@/assets/images/illustration.png'

const height = ref('100vh')
const isSliding = ref(false)

if (typeof window !== 'undefined') {
  height.value = window.innerHeight + 'px'
  isSliding.value = window.innerWidth / window.innerHeight < 1920 / 1074

  window.onresize = () => {
    height.value = window.innerHeight + 'px'
    isSliding.value = window.innerWidth / window.innerHeight < 1920 / 1074
  }
}
</script>

<template>
  <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
    <div
      :style="{
        backgroundImage: 'url(' + illustration + ')'
      }"
      :class="isSliding ? 'illustration' : 'illustration-static'"
    ></div>
    <div class="flex flex-col items-start absolute left-14 bottom-14 max-sm:left-8 max-sm:bottom-8">
      <h1 class="mb-5 text-primary">My links</h1>
      <a class="group py-2 flex items-center gap-x-6" href="mailto:mkofdwu@gmail.com">
        <MaterialIcon name="mail" class="h-7 transition-opacity group-hover:opacity-0" />
        <div class="relative">
          mkofdwu@gmail.com
          <div class="absolute w-0 h-px bg-white transition-all group-hover:w-full"></div>
        </div>
        <MaterialIcon
          name="arrow_outward"
          class="absolute transition-all -translate-x-2 translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </a>
      <a
        class="group py-2 flex items-center gap-x-6"
        href="https://linkedin.com/in/lee-jia-jie"
        target="_blank"
      >
        <LinkedInIcon class="transition-opacity group-hover:opacity-0" />
        <div class="relative">
          linkedin.com/in/lee-jia-jie
          <div class="absolute w-0 h-px bg-white transition-all group-hover:w-full"></div>
        </div>
        <MaterialIcon
          name="arrow_outward"
          class="absolute transition-all -translate-x-2 translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </a>
      <a
        class="group py-2 flex items-center gap-x-6"
        href="https://github.com/mkofdwu"
        target="_blank"
      >
        <GithubIcon class="transition-opacity group-hover:opacity-0" />
        <div class="relative">
          mkofdwu
          <div class="absolute w-0 h-px bg-white transition-all group-hover:w-full"></div>
        </div>
        <MaterialIcon
          name="arrow_outward"
          class="absolute transition-all -translate-x-2 translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>
.illustration {
  position: absolute;
  right: 0;
  bottom: 0;
  background-repeat: repeat-x;
  background-size: contain;

  --width: calc(v-bind(height) * 1920 / 1074);
  width: calc(2 * var(--width));
  height: 100%;
  animation: slide 60s linear infinite;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(var(--width));
  }
}

.illustration-static {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}
</style>
