<script setup lang="ts">
import { Convert } from "~/utils/convert";
const { t } = useI18n();
const input = ref("");
const output = ref("");
const isBase64URL = ref(false);

function decode() {
  let value = new TextDecoder().decode(Convert.FromBase64String(output.value));

  if (isBase64URL) {
    value = value.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }

  input.value = value;
}

function encode() {
  let value = input.value;
  if (isBase64URL) {
    value = value.replace(/-/g, "+").replace(/_/g, "/");
    const padding =
      value.length % 4 === 0 ? "" : "=".repeat(4 - (value.length % 4));
    value += padding;
  }

  output.value = Convert.ToBase64String(new TextEncoder().encode(value));
}
</script>

<template>
  <div class="flex items-start gap-2 flex-col">
    <UTextarea
      :rows="10"
      v-model="input"
      class="flex-1 w-full"
      spellcheck="false"
      :placeholder="t('pages.converters.base64.input.placeholder')"
    />
    <div class="flex flex-row justify-center items-center gap-2">
      <UButton icon="i-heroicons:arrow-long-down-20-solid" @click="encode">
        {{ t("common.encode") }}
      </UButton>
      <UButton icon="i-heroicons:arrow-long-up-20-solid" @click="decode">
        {{ t("common.decode") }}
      </UButton>
      <UCheckbox label="Base64URL" v-model="isBase64URL" />
    </div>
    <UTextarea
      :rows="10"
      v-model="output"
      class="flex-1 w-full"
      spellcheck="false"
      :placeholder="t('pages.converters.base64.output.placeholder')"
    />
  </div>
</template>
