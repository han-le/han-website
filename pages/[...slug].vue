<template>
  <NavBar />
  <div class="px-6 py-16 lg:px-8 blog-page ">
    <ContentDoc v-slot="{ doc }">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p class="text-sm leading-7 text-gray-400 font-sans">Posted on {{ dateFormatter.format(doc.date) }}</p>
      <h1 class="mt-5 mb-10 text-3xl sm:text-5xl font-bold tracking-tight text-stone-700 post-title hello">{{ doc.title }}</h1>
      <ContentRenderer :value="doc" class="prose post-body font-sans"/>
    </div>
    </ContentDoc>
  </div>
  <Feeter/>
</template>


<script setup lang="ts">
import {useDateFormatter} from "~/composables/useDateFormatter";

const dateFormatter = useDateFormatter()
</script>

<style>
.post-title {
  line-height: 3.5rem
}

@media screen and (max-width: 640px) {
  .post-title {
    line-height: 2.5rem
  }
}

.blog-page code {
  font-family: 'Source Code Pro', monospace;
}

.blog-page img {
  margin: 10px auto;
  border-radius: 4px;
}

.blog-page .post-body {
  max-width: 100%
}

</style>
