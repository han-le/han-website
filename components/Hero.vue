<template>
  <div class="relative isolate overflow-hidden px-6 lg:px-8 py-12 sm:py-32 " >

    <img src="/img/artboard_phone.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover block md:hidden" />
    <img src="/img/artboard_medium.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover hidden md:block lg:hidden" />
    <img src="/img/artboard_large.png" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover hidden lg:block" />

    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl hello">Hello! I'm Han</h2>
      <p class="mt-6 leading-8 text-gray-600 text-sm intro">
        Seems you've discovered my digital nook. Here, I write down things I have learned from my work & my personal journey <span class="animate-faster-pulse">♥</span>
      </p>
      <hr class="mt-6">
    </div>
  </div>
</template>

<style>
.hello {
  font-family: 'Rozha One', serif;
  letter-spacing: 2px;
}

.intro {
  font-family: 'Overpass Mono', monospace;
}

hr {
  width: 50%;       /* Set to desired width */
  margin-left: auto;
  margin-right: auto;
  border: none;     /* Removes default border in some browsers */
  border-top: 1px solid #e5e7eb;  /* Sets a single line at the top */
}

</style>
<script setup lang="ts">
</script>
