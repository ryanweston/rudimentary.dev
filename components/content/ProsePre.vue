<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <pre
    :class="$props.class"
    class="bg-zinc-900 rounded-lg px-6 py-6 overflow-x-auto text-sm mb-6"
  ><slot /></pre>
</template>

<style lang="css">
pre code .line {
  display: block;
}
</style>
