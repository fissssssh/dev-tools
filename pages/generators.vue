<script setup lang="ts">
const { t } = useI18n();
const router = useRouter();
const localePath = useLocalePath();

const links = ref([
  {
    label: t("pages.generators.uuid.name"),
    to: localePath("/generators/uuid"),
  },
]);

onBeforeMount(() => {
  router.replace(localePath("/generators/uuid"));
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <UHorizontalNavigation :links="links" />
    <NuxtPage />
  </div>
</template>
