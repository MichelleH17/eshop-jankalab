import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  const itemCount = ref(0);

  const addItem = () => {
    itemCount.value++;
  };

  return {
    itemCount,
    addItem,
  };
});
