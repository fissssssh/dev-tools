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
const route = useRoute();
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
        <li>
          <NuxtLink
            class="text-sm font-semibold"
            to="/"
            active-class="text-primary"
            >Home</NuxtLink
          >
        </li>
        <li>
          <UDropdown
            :items="[[{ label: 'Hex', to: '/converters/hex' }]]"
            mode="hover"
            :popper="{ placement: 'bottom-start' }"
          >
            <UButton
              class="font-semibold"
              :color="
                route.path.startsWith('/converters') ? 'primary' : 'white'
              "
              label="Converters"
              variant="ghost"
              trailing-icon="i-heroicons-chevron-down-20-solid"
            />
          </UDropdown>
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
      </div>
    </UContainer>
  </header>
</template>
