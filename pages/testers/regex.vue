<script setup lang="ts">
const { t } = useI18n();
const pattern = ref("");
const input = ref("");
const segments = ref<{ text: string; matched: boolean }[]>([]);

function match() {
  segments.value = [];
  if (!input.value || !pattern.value) {
    return;
  }

  let re: RegExp;
  try {
    re = new RegExp(pattern.value, "g");
  } catch (error) {
    return;
  }
  let text = input.value;
  let match;
  let lastIndex = 0;
  while ((match = re.exec(text)) != null) {
    if (lastIndex < match.index) {
      segments.value.push({
        text: text.slice(lastIndex, match.index),
        matched: false,
      });
    }
    segments.value.push({
      text: match[0],
      matched: true,
    });
    lastIndex = re.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.value.push({ text: text.slice(lastIndex), matched: false });
  }
}
</script>
<template>
  <div>
    <div class="grid grid-cols-[auto_1fr] items-center gap-2">
      <div>{{ t("pages.testers.regex.pattern.label") }}:</div>
      <UInput
        v-model="pattern"
        :spellcheck="false"
        :placeholder="t('pages.testers.regex.pattern.placeholder')"
        @update:model-value="match"
      />
      <div>{{ t("pages.testers.regex.text.label") }}:</div>
      <UTextarea
        :rows="10"
        v-model="input"
        :spellcheck="false"
        :placeholder="t('pages.testers.regex.text.placeholder')"
        @update:model-value="match"
      />
      <div>{{ t("pages.testers.regex.result.label") }}:</div>
      <div
        class="min-h-8 max-h-64 overflow-y-auto whitespace-pre-wrap break-words relative block disabled:cursor-not-allowed disabled:opacity-75 hover:outline-none border-0 form-textarea rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:ring-2 hover:ring-primary-500 dark:hover:ring-primary-400 resize-none"
      >
        <template v-for="seg in segments">
          <span
            v-if="seg.matched"
            class="inline-block break-words whitespace-pre-wrap text-primary rounded-sm bg-primary/25 px-1 mx-1"
          >
            {{ seg.text }}
          </span>
          <template v-else>{{ seg.text }}</template>
        </template>
      </div>
    </div>
  </div>
</template>
