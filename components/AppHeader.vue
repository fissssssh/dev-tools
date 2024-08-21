<script setup lang="ts">
const { t, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const avaliableLocales = computed(() => [
  locales.value.map((l) => ({
    label: l.name!,
    to: switchLocalePath(l.code),
  })),
]);
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.preference === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
const links = ref([
  { label: t("pages.home.name"), to: "/" },
  { label: t("pages.converters.name"), to: "/converters" },
  { label: t("pages.generators.name"), to: "/generators" },
  { label: t("pages.testers.name"), to: "/testers" },
]);
</script>
<template>
  <header class="border-b h-16 sticky top-0 z-50 backdrop-blur bg-opacity-75">
    <UContainer class="h-full flex items-center justify-between">
      <UDropdown class="md:hidden" :items="[links]">
        <UButton
          variant="outline"
          color="white"
          icon="heroicons:bars-3-solid"
        />
      </UDropdown>
      <div
        class="hidden sm:flex flex-1 items-center justify-center md:justify-start"
      >
        <NuxtLinkLocale to="/">
          <span class="text-2xl font-extrabold">Dev Tools</span>
        </NuxtLinkLocale>
      </div>
      <ul class="hidden md:flex items-center gap-x-8">
        <li v-for="l in links">
          <NuxtLinkLocale
            class="text-sm font-semibold"
            :to="l.to"
            active-class="text-primary"
          >
            {{ l.label }}
          </NuxtLinkLocale>
        </li>
      </ul>

      <div class="flex md:flex-1 items-center justify-end">
        <UDropdown :items="avaliableLocales" mode="hover">
          <UButton
            icon="heroicons:language-20-solid"
            variant="ghost"
            color="white"
          />
        </UDropdown>
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
