<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const timeUntilORD = ref('')

function updateTimeUntilORD() {
  const now = new Date().getTime()
  const timeLeft = new Date(2026, 0, 31).getTime() - now

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  const daysFmt = days.toString().padStart(2, '0')
  const hoursFmt = hours.toString().padStart(2, '0')
  const minutesFmt = minutes.toString().padStart(2, '0')
  const secondsFmt = seconds.toString().padStart(2, '0')

  timeUntilORD.value = `${daysFmt}:${hoursFmt}:${minutesFmt}:${secondsFmt} to ORD`
}

updateTimeUntilORD()
setInterval(updateTimeUntilORD, 1000)
</script>

<template>
  <div class="h-16 flex items-center justify-center z-10 px-10 max-sm:h-14 max-sm:px-0">
    <router-link to="/" class="flex-1 font-semibold text-lg max-lg:hidden">Jia Jie</router-link>
    <router-link
      to="/"
      class="transition-opacity mr-10 max-sm:mr-6"
      :class="$route.path === '/' ? 'opacity-100' : 'opacity-60'"
    >
      about me
    </router-link>
    <a href="https://mkofdwu.github.io/ctf-writeups/" class="mr-10 max-sm:mr-6 opacity-60">
      ctf writeups
    </a>
    <router-link
      to="/links"
      class="transition-opacity"
      :class="$route.path === '/links' ? 'opacity-100' : 'opacity-60'"
    >
      links
    </router-link>
    <span class="flex-1 text-right opacity-60 max-md:hidden">{{ timeUntilORD }}</span>
  </div>
  <div class="line top-16 w-[calc(100vw-5rem)] max-sm:top-14 max-sm:w-screen"></div>
</template>

<style scoped>
.line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 1.5px;
  z-index: 10;
  background-image: linear-gradient(to right, #525252 33%, rgba(82, 82, 82, 0) 0%);
  background-size: 12px;
}
</style>
