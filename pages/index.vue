<script lang="ts" setup>
import CategoryPill from '~/components/CategoryPill.vue'

const { data } = await useAsyncData('home', () => queryContent().limit(15).find())
</script>

<template>
  <div class="space-y-12 font-mono">
    <div class="text-center space-y-2">
      <h1>Foundations</h1>
      <p class="text-sm text-zinc-500">
        A blog dedicated to key computer science, software engineering, web development & security concepts.
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <div
        v-for="article in data"
        :key="article.id"
        class="flex justify-between gap-4"
      >
        <div class="flex flex-col gap-2">
          <NuxtLink
            class="text-sm"
            :to="article._path"
          >
            {{ article.title }}
          </NuxtLink>
          <div class="flex gap-1">
            <CategoryPill
              v-for="cat in article.categories"
              :key="cat"
              :cat="cat"
            />
          </div>
        </div>
        <div class="text-xs text-zinc-500">
          {{ new Date().toLocaleDateString(undefined, { weekday: 'long',
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric' }) }}
        </div>
      </div>
    </div>
  </div>
</template>
