<template>
  <div class="py-2 mb-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <div class="space-y-16 sm:mt-2 sm:pt-2">
          <article v-for="post in posts" :key="post._path" class="flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <p class="text-gray-400">{{ dateFormatter.format(post.date) }}</p>
              <p class="relative z-10 rounded-full bg-amber-50 px-3 py-1.5 font-medium text-amber-700">{{ post.category }}</p>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-xl font-bold leading-6 text-gray-900 group-hover:text-amber-600">
                <NuxtLink :to="post._path" class="hello">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useDateFormatter} from "~/composables/useDateFormatter.js";

const posts = await queryContent('/blog')
    .sort({ date: -1 }) // show latest articles first
    .find();

const dateFormatter = useDateFormatter()
</script>
