<script setup lang="ts">
import { v4 as uuidv4 } from "uuid";
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
  <UInput v-model="uuid" readonly spellcheck="false" @click="copy" />
  <div>
    <UButton @click="generate">Regenerate</UButton>
  </div>
</template>
