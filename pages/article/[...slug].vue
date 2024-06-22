<script lang="ts" setup>
const slug = useRoute().params.slug

const { data } = await useAsyncData(`${slug[0]}`, () => queryContent().where({ _path: { $eq: `/article/${slug[0]}` as string } }).findOne())
const { data: surround } = await useAsyncData(`${slug[0]}-surround`, () => queryContent()
  .where({ categories: { $containsAny: data.value?.categories }, _path: { $ne: `/article/${slug[0]}` } })
  .sort({ date: 1 })
  .limit(3)
  .find())

const surroundFiltered = computed(() => surround.value?.filter(Boolean) || [])

definePageMeta({ layout: 'article' })

defineOgImageComponent('ArticleOG', {
  title: data.value?.title,
  description: data.value?.description,
})

useSeoMeta({
  title: () => data.value?.title || 'Rudimentary',
  ogTitle: () => data.value?.title || 'Rudimentary',
  description: () => data.value?.description || 'An article on Rudimentary',
  ogDescription: () => data.value?.description || 'An article on Rudimentary',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <main>
    <ContentRenderer
      v-if="data"
      :value="data"
    >
      <header class="flex flex-col gap-2 mb-8 border-b border-zinc-200 pb-4 border-dashed">
        <h1 class="font-mono">
          {{ data.title }}
        </h1>
        <div class="flex flex-col md:flex-row gap-2 md:items-center">
          <div class="flex gap-2">
            <CategoryPill
              v-for="cat in data.categories"
              :key="cat"
              :cat="cat"
            />
          </div>
          <div class="text-xs text-zinc-500">
            {{ new Date(data.lastUpdated).toLocaleDateString(undefined, { weekday: 'long',
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

      <div
        v-if="data.references && data.references.length"
        class="mt-10"
      >
        <p class="font-mono text-xs mb-4 border-b border-zinc-200 pb-2 border-dashed">
          References & learning resources:
        </p>
        <ul>
          <li
            v-for="reference in data.references"
            :key="reference"
          >
            <a
              target="_blank"
              class="text-xs text-blue-700 hover:underline font-mono"
              :href="reference"
            >{{ reference }}</a>
          </li>
        </ul>
      </div>

      <div v-if="surround && surround.length">
        <div class="mt-10">
          <p class="text-xs font-mono mb-4 border-b border-zinc-200 pb-2 border-dashed">
            Related articles
          </p>
          <div class="flex flex-col divide-y-1 divide-dashed">
            <Article
              v-for="article in surroundFiltered"
              :key="article._path"
              :article="article"
              class="py-4"
            >
              {{ article.title }}
            </Article>
          </div>
        </div>
      </div>
    </ContentRenderer>
  </main>
</template>
