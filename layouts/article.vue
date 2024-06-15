<template>
  <div class="flex flex-col items-center justify-center my-10 px-4">
    <NuxtLink
      to="/"
      class="text-sm font-mono mb-16"
    >
      Rudimentary
    </NuxtLink>
    <div class="md:max-w-xl w-full">
      <slot />
    </div>
    <Footer class="mt-14" />
  </div>
</template>
