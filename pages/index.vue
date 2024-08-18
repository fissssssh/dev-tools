<script setup lang="ts">
definePageMeta({
  layout: false,
});

const { t } = useI18n();

const links = ref([
  {
    icon: "heroicons:arrow-path-20-solid",
    title: "pages.home.converter.name",
    description: "pages.home.converter.description",
    to: "/converters",
  },
  {
    icon: "heroicons:gift",
    title: "pages.home.generator.name",
    description: "pages.home.generator.description",
    to: "/generators",
  },
]);
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl font-extrabold pt-12">
      {{ t("pages.home.app.name") }}
    </h1>
    <p class="mt-4">{{ t("pages.home.app.description") }}</p>
  </div>
  <div class="mt-8 grid gap-4 grid-flow-row md:grid-cols-2">
    <NuxtLinkLocale v-for="l in links" :to="l.to">
      <div
        class="h-full flex flex-col border rounded-lg p-6 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
      >
        <UIcon class="w-8 h-8 mb-4" :name="l.icon" />
        <p class="text-lg font-medium text-gray-900 dark:text-white mb-1">
          {{ t(l.title) }}
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ t(l.description) }}
        </p>
      </div>
    </NuxtLinkLocale>
  </div>
</template>
