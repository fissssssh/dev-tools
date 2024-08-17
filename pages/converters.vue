<script setup lang="ts">
definePageMeta({
  redirect: "/converters/hex",
});
const links = ref([
  { label: "Hex", to: "/converters/hex" },
  { label: "Base64", to: "/converters/base64" },
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <UHorizontalNavigation :links="links" />
    <NuxtPage />
  </div>
</template>
