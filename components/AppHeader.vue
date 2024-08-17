<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.preference === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
const navs = ref([
  { label: "Home", to: "/" },
  { label: "Converter", to: "/converters" },
  { label: "Generator", to: "/generators" },
]);
</script>
<template>
  <header class="border-b h-16 sticky top-0 z-50 backdrop-blur bg-opacity-75">
    <UContainer class="h-full flex items-center justify-between">
      <div class="flex-1 hidden md:flex items-center justify-start">
        <NuxtLink to="/"
          ><span class="text-2xl font-extrabold">Dev Tools</span></NuxtLink
        >
      </div>
      <ul class="flex items-center gap-x-8">
        <li v-for="nav in navs">
          <NuxtLink
            class="text-sm font-semibold"
            :to="nav.to"
            active-class="text-primary"
            >{{ nav.label }}</NuxtLink
          >
        </li>
      </ul>
      <div class="flex-1 flex items-center justify-end">
        <ColorScheme>
          <UButton
            :icon="
              isDark ? 'i-heroicons:moon-20-solid' : 'i-heroicons:sun-20-solid'
            "
            size="sm"
            @click="isDark = !isDark"
            variant="ghost"
            aria-label="theme-toggle"
          />
        </ColorScheme>
        <UButton
          icon="i-grommet-icons:github"
          variant="ghost"
          color="white"
          to="https://github.com/fissssssh/dev-tools"
          target="_blank"
        ></UButton>
      </div>
    </UContainer>
  </header>
</template>
