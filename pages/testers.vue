<script setup lang="ts">
const { t } = useI18n();
const router = useRouter();
const route = useRoute();
const localePath = useLocalePath();

const links = ref([
  {
    label: t("pages.testers.regex.name"),
    to: localePath("/testers/regex"),
  },
]);

onBeforeMount(() => {
  const defaultPath = localePath("/testers");

  if (defaultPath === route.path) {
    router.replace(localePath("/testers/regex"));
  }
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <UHorizontalNavigation :links="links" />
    <NuxtPage />
  </div>
</template>
