<script setup lang="ts">
import dayjs from "dayjs";
const toast = useToastEx();
const { t } = useI18n();
const input = ref("");
const dateTime = ref(dayjs());
const dateTimeFormats = [
  {
    label: "Timestamp",
    format: "x",
    click() {
      selectedDateTimeFormat.value = this;
    },
  },
  {
    label: "Unix",
    format: "X",
    click() {
      selectedDateTimeFormat.value = this;
    },
  },
  {
    label: "RFC 3339",
    format: "YYYY-MM-DDTHH:mm:ssZ",
    click() {
      selectedDateTimeFormat.value = this;
    },
  },
];
const selectedDateTimeFormat = ref(dateTimeFormats[0]);

function detectInputDateTimeFormat() {
  if (/^[0-9]+$/.test(input.value)) {
    const now = dayjs().unix();
    if (Number(input.value) <= now) {
      selectedDateTimeFormat.value = dateTimeFormats[1];
    } else {
      selectedDateTimeFormat.value = dateTimeFormats[0];
    }
  } else {
    selectedDateTimeFormat.value = dateTimeFormats[2];
  }

  dateTime.value = dayjs(input.value, selectedDateTimeFormat.value.format);
}

function copy(e: MouseEvent) {
  navigator.clipboard.writeText((e.target as HTMLInputElement).value);
  toast.success("Copied!");
}
</script>
<template>
  <div class="grid gap-2 md:grid-cols-2 items-center">
    <div class="flex flex-row gap-2">
      <UInput
        class="flex-1"
        v-model="input"
        @update:model-value="detectInputDateTimeFormat"
        :placeholder="t('pages.converters.datetime.input.placeholder')"
      />
      <UDropdown :items="[dateTimeFormats]">
        <UButton
          :label="selectedDateTimeFormat.label"
          :trailing="true"
          color="white"
          icon="heroicons:chevron-down-20-solid"
        />
      </UDropdown>
    </div>
    <div class="grid gap-2 grid-cols-[auto_1fr] items-center">
      <template v-for="dateTimeFormat in dateTimeFormats">
        <div>{{ dateTimeFormat.label }}</div>
        <UInput
          readonly
          :spellcheck="false"
          :model-value="dateTime.format(dateTimeFormat.format)"
          @click="copy"
        />
      </template>
    </div>
  </div>
</template>
