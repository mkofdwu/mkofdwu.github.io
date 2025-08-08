<script setup lang="ts">
import MaterialIcon from '@/components/MaterialIcon.vue'
</script>

<template>
  <div class="flex-1 relative overflow-hidden">
    <img
      src="@/assets/images/tree.png"
      width="780"
      class="absolute top-1/2 right-1/2 translate-x-36 -translate-y-1/2 max-lg:translate-x-44 max-md:translate-x-2/3 max-md:top-auto max-md:translate-y-0 max-md:bottom-40 max-md:w-[640px] min-w-[640px]"
    />
    <div
      class="absolute top-1/2 left-1/2 -translate-y-1/2 flex flex-col items-start max-w-[392px] pr-8 max-md:left-8 max-md:top-auto max-md:translate-y-0 max-md:bottom-8"
    >
      <h1 class="mb-2 max-md:mb-1">
        Hi, I'm
        <h1 class="text-primary inline">Jia Jie</h1>
      </h1>
      <p class="mb-10 max-md:mb-8">
        I play CTFs (web, pwn, rev and pyjails) with
        <a
          href="https://ctftime.org/team/208726"
          target="_blank"
          class="underline transition-opacity opacity-60 hover:opacity-100"
          >slight_smile</a
        >.
      </p>
      <a
        href="https://drive.google.com/file/d/1qVkxCsOKVhcdN39GXOyfgTEl_Uf3Vc_Y/view?usp=sharing"
        target="_blank"
        class="cta-btn h-14 pl-5 pr-6 rounded-[20px] text-black font-semibold flex items-center"
      >
        <MaterialIcon name="open_in_new" class="mr-4 text-black text-xl" />
        View resume
      </a>
    </div>
  </div>
</template>

<style>
.cta-btn {
  background: linear-gradient(to left, #f2f2f2, #f2f2f2, #64a577, #64a577);
  background-size: 300% 100%;
  background-position-x: 100%;
  transition: background-position-x 300ms ease;
}

.cta-btn:hover {
  background-position-x: 0%;
}
</style>
