<script setup lang="ts">
useHead({
  script: [
    {
      'src': 'https://plausible.io/js/script.js',
      'defer': true,
      'data-domain': 'rudimentary.dev',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
