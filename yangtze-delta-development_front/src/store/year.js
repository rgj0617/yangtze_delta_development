import { defineStore } from "pinia";
import { ref } from "vue";

export const useYearStore = defineStore("year", () => {
  const year = ref(2023);

  function changeYear() {
    if (year.value === 2023) {
      year.value = 2024;
    } else {
      year.value = 2023;
    }
  }
  return { year, changeYear };
});
