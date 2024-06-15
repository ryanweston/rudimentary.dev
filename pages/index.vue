<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent().limit(15).find())
defineOgImageComponent('Default')

useSeoMeta({
  title: 'Rudimentary',
  ogTitle: 'Rudimentary',
  description: 'Writing dedicated to key computer science, software engineering, web development & security concepts.',
  ogDescription: 'Writing dedicated to key computer science, software engineering, web development & security concepts.',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="space-y-12 font-mono">
    <div class="text-center space-y-2">
      <NuxtLink to="/">
        <h1>Rudimentary</h1>
      </NuxtLink>
      <p class="text-sm text-zinc-500">
        Writing dedicated to key computer science, software engineering, web development & security concepts.
      </p>
    </div>
    <div class="flex flex-col divide-y-1 divide-dashed">
      <Article
        v-for="article in data"
        :key="article.id"
        class="py-4"
        :article="article"
      />
    </div>
  </div>
</template>
