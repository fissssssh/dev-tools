<script setup lang="ts">
import { Convert } from "~/utils/convert";
const { t } = useI18n();
const toast = useToastEx();
const input = ref("");
const output = ref("");

function formatHexInput() {
  let value = input.value.replace(/[^a-fA-F0-9]/g, "");
  value = value.replace(/(.{2})(?=.)/g, "$1 ");
  input.value = value;
}

function convert(reverse: boolean) {
  try {
    if (reverse) {
      input.value = Convert.ToHexString(new TextEncoder().encode(output.value));
    } else {
      let hex = input.value.replace(/[^a-fA-F0-9]/g, "");
      output.value = new TextDecoder().decode(Convert.FromHexString(hex));
    }
  } catch (error: any) {
    toast.error(error.message);
  }
}
</script>

<template>
  <div class="flex items-start gap-2 flex-col">
    <UTextarea
      :rows="10"
      v-model="input"
      class="flex-1 w-full"
      textarea-class="uppercase"
      spellcheck="false"
      :placeholder="t('pages.converters.hex.input.placeholder')"
      @update:model-value="formatHexInput"
    />
    <div class="flex flex-row gap-2">
      <UButton
        icon="i-heroicons:arrow-long-down-20-solid"
        @click="convert(false)"
      >
        {{ t("common.convert") }}
      </UButton>
      <UButton icon="i-heroicons:arrow-long-up-20-solid" @click="convert(true)">
        {{ t("common.reverse") }}
      </UButton>
    </div>
    <UTextarea
      :rows="10"
      v-model="output"
      class="flex-1 w-full"
      spellcheck="false"
    />
  </div>
</template>
