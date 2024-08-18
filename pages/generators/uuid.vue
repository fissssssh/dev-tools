<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
const { t } = useI18n();
const toast = useToastEx();
const uuid = ref();

function generate() {
  uuid.value = uuidv4();
}

function copy() {
  navigator.clipboard.writeText(uuid.value);
  toast.success("Copied!");
}

onMounted(() => {
  generate();
});
</script>

<template>
  <div class="flex gap-2">
    <UButton @click="generate">{{ t("common.regenerate") }}</UButton>
    <UInput
      class="flex-1"
      v-model="uuid"
      readonly
      spellcheck="false"
      @click="copy"
    />
  </div>
</template>
