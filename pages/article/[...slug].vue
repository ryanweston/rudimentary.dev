<script lang="ts" setup>
const slug = useRoute().params.slug
const { data } = await useAsyncData(`${slug[0]}`, () => queryContent().where({ _path: { $eq: `/article/${slug[0]}` as string } }).findOne())

definePageMeta({ layout: 'article' })

defineOgImageComponent('ArticleOG', {
  title: data.value?.title,
  description: data.value?.description,
})

useHead({ title: data.value?.title })
</script>

<template>
  <main>
    <ContentRenderer
      v-if="data"
      :value="data"
    >
      <header class="flex flex-col gap-2 mb-8">
        <h1 class="font-mono text-lg">
          {{ data.title }}
        </h1>
        <div class="flex gap-2 items-center">
          <div class="flex gap-2">
            <CategoryPill
              v-for="cat in data.categories"
              :key="cat"
              :cat="cat"
            />
          </div>
          <div class="text-xs text-zinc-500">
            {{ new Date().toLocaleDateString(undefined, { weekday: 'long',
                                                          year: 'numeric',
                                                          month: 'long',
                                                          day: 'numeric' }) }}
          </div>
        </div>
      </header>

      <ContentRendererMarkdown :value="data" />
      <template #empty>
        <p>No content found.</p>
      </template>
    </ContentRenderer>
  </main>
</template>
