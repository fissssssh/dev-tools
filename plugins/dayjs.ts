import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import advancedFormat from "dayjs/plugin/advancedFormat";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    dayjs.extend(customParseFormat);
    dayjs.extend(advancedFormat);
  });
});
