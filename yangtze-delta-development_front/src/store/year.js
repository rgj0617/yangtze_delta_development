import { defineStore } from "pinia";
import { ref } from "vue";

export const useYearStore = defineStore("year", () => {
  const year = ref(2025); // 默认显示2025年份

  function changeYear() {
    if (year.value === 2023) {
      year.value = 2024;
    } else if (year.value === 2024) {
      year.value = 2025;
    } else {
      year.value = 2023;
    }
  }

  // 直接设置年份的函数，用于年份选择器
  function setYear(newYear) {
    if ([2023, 2024, 2025].includes(newYear)) {
      year.value = newYear;
    }
  }

  return { year, changeYear, setYear };
});
