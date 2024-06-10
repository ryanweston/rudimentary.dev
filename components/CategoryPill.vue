<script setup lang="ts">
defineProps<{ cat: string }>()
</script>

<template>
  <nuxt-link
    :to="`/category/${cat}`"
    class="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded-2 flex-shrink-0 hover:bg-zinc-200 hover:text-zinc-900"
  >
    {{ cat }}
  </nuxt-link>
</template>
