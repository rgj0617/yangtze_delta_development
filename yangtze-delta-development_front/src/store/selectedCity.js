import { defineStore } from "pinia";
import { ref } from "vue";

export const useSelectedCityStore = defineStore("selectedCity",() => {
  const selectedCity = ref('未选择');

  function get() {
    return selectedCity;
  }

  function set(newCity) {
    if(newCity) {
      selectedCity.value = newCity;
    } else {
      selectedCity.value = '未选择';
    }
  }

  return { get, set };
})