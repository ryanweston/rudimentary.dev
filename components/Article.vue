<script lang="ts" setup>
import type { ParsedContent } from '@nuxt/content/types'

defineProps<{ article: ParsedContent }>()
</script>

<template>
  <div class="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
    <div class="flex flex-col gap-2">
      <NuxtLink
        class="text-xs font-mono"
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
      {{ new Date(article.publishedDate).toLocaleDateString(undefined, { weekday: 'long',
                                                                         year: 'numeric',
                                                                         month: 'long',
                                                                         day: 'numeric' }) }}
    </div>
  </div>
</template>
