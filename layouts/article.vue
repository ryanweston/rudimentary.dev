<template>
  <div class="flex flex-col items-center justify-center my-10">
    <NuxtLink
      to="/"
      class="text-sm font-mono mb-16"
    >
      Foundations
    </NuxtLink>
    <div class="max-w-xl">
      <slot />
    </div>
    <Footer class="mt-10" />
  </div>
</template>
