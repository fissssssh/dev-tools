<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const router = useRouter();
const route = useRoute();

const links = computed(() => [
  { label: t("pages.converters.hex.name"), to: localePath("/converters/hex") },
  {
    label: t("pages.converters.base64.name"),
    to: localePath("/converters/base64"),
  },
  {
    label: t("pages.converters.datetime.name"),
    to: localePath("/converters/datetime"),
  },
]);

onBeforeMount(() => {
  const defaultPath = localePath("/converters");

  if (defaultPath === route.path) {
    router.replace(localePath("/converters/hex"));
  }
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <UHorizontalNavigation :links="links" />
    <NuxtPage />
  </div>
</template>
