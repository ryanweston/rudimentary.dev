<script lang="ts" setup>
import { categoryDescriptions } from '~/constants/categories'

const slug = useRoute().params.slug
const { data } = await useAsyncData(`category-${slug[0]}`, () => queryContent().where({ categories: { $contains: slug[0] } }).findOne())

definePageMeta({ layout: 'article' })

useHead({ title: data.value?.title })

const posts = await useAsyncData(`category-${slug[0]}`, () => queryContent().where({ categories: { $contains: slug[0] } }).sort({ publishedDate: -1 }).find())

defineOgImageComponent('ArticleOG', {
  title: data.value?.title,
  description: data.value?.description,
})
</script>

<template>
  <main>
    <div class="flex flex-col gap-1 mb-8">
      <h1 class="font-mono normal-case">
        {{ (slug[0].charAt(0).toUpperCase() + slug[0].slice(1)).split('-').join(' ') }}
      </h1>
      <p class="text-sm text-zinc-400">
        {{ categoryDescriptions[slug[0]] ? categoryDescriptions[slug[0]] : '' }}
      </p>
    </div>
    <div class="flex flex-col divide-y-1 divide-dashed divide-zinc-700">
      <Article
        v-for="article in posts.data.value"
        :key="article.id"
        class="py-4"
        :article="article"
      />
    </div>
  </main>
</template>
