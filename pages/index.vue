<script lang="ts" setup>
const { data } = await useAsyncData('home', () => queryContent().limit(15).find())
defineOgImageComponent('Default')
</script>

<template>
  <div class="space-y-12 font-mono">
    <div class="text-center space-y-2">
      <h1>Rudimentary</h1>
      <p class="text-sm text-zinc-500">
        Writing dedicated to key computer science, software engineering, web development & security concepts.
      </p>
    </div>
    <div class="flex flex-col gap-4">
      <Article
        v-for="article in data"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>
