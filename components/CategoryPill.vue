<script setup lang="ts">
defineProps<{ cat: string }>()
</script>

<template>
  <nuxt-link
    :to="`/category/${cat}`"
    class="text-xs font-mono px-2 py-0.25 bg-zinc-900 text-zinc-400 rounded-2 flex-shrink-0 hover:bg-zinc-200 hover:text-zinc-900"
  >
    {{ cat }}
  </nuxt-link>
</template>
