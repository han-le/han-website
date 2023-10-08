<template>
  <nav class="bg-stone-100">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="sm:ml-6 sm:flex sm:space-x-8">
            <NuxtLink to="/" class="inline-flex items-center px-1 pt-1 text-stone-900 hover:text-amber-600">
              <span class="mr-1 pb-0.5 animate-faster-pulse">↞</span>
              <span class="home">Home</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style>

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0.1;
  }
}

.home {
  font-family: 'Rozha One', serif;
}
</style>
