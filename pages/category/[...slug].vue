<script lang="ts" setup>
const slug = useRoute().params.slug
const { data } = await useAsyncData(`category-${slug[0]}`, () => queryContent().where({ categories: { $contains: slug[0] } }).findOne())

definePageMeta({ layout: 'article' })

useHead({ title: data.value?.title })
</script>

<template>
  <main />
</template>
