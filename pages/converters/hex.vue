<script setup lang="ts">
import { TextHexConverter } from "../../utils/converter";

const input = ref("");
const output = ref("");
const converter = ref(new TextHexConverter());
function formatHexInput() {
  let value = input.value.replace(/[^a-zA-Z0-9]/g, "");
  value = value.replace(/(.{2})(?=.)/g, "$1 ");
  input.value = value;
}

function convert(reverse: boolean) {
  if (reverse) {
    input.value = converter.value.reverse(output.value);
    formatHexInput();
  } else {
    const hex = input.value.replace(/[^a-zA-Z0-9]/g, "");
    output.value = converter.value.convert(hex);
  }
}
</script>

<template>
  <div class="flex items-center gap-4 flex-col">
    <UTextarea
      :rows="10"
      v-model="input"
      class="flex-1 w-full"
      textarea-class="uppercase"
      @update:model-value="formatHexInput"
    />
    <div class="flex flex-row justify-center items-center gap-4">
      <UButton
        icon="i-heroicons:arrow-long-down-20-solid"
        @click="convert(false)"
        :trailing="true"
        >Convert</UButton
      >
      <UButton icon="i-heroicons:arrow-long-up-20-solid" @click="convert(true)"
        >Reverse</UButton
      >
    </div>
    <UTextarea :rows="10" v-model="output" class="flex-1 w-full" />
  </div>
</template>
