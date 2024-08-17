<script setup lang="ts">
const links = ref([{ label: "UUID", to: "/generators/uuid" }]);
definePageMeta({ redirect: "/generators/uuid" });
</script>

<template>
  <div class="flex flex-col gap-4">
    <UHorizontalNavigation :links="links" />
    <NuxtPage />
  </div>
</template>
