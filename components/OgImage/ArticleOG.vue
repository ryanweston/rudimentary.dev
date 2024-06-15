<script setup lang="ts">
// convert to typescript props
withDefaults(defineProps<{
  title?: string
  description?: string
}>(), {
  title: 'title',
})
</script>

<template>
  <div class="w-full h-full flex justify-between relative items-center p-20 bg-white">
    <div class="flex items-center justify-center grow">
      <div class="flex flex-col w-full max-w-[65%] text-center">
        <h1
          v-if="title"
          class="font-mono text-5xl"
        >
          {{ title }}
        </h1>
      </div>
    </div>
    <p class="absolute bottom-10 text-xl">
      Rudimentary
    </p>
  </div>
</template>
