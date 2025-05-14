<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";

defineProps({
  isOpen: Boolean,
});
const emit = defineEmits(["close", "update"]);

const popupRef = ref<HTMLElement | null>(null);

const selectedLanguage = ref("EN");
const selectedCurrency = ref("Kč");

function submit() {
  emit("update", {
    lang: selectedLanguage.value,
    currency: selectedCurrency.value,
  });
}

onClickOutside(popupRef as Ref<HTMLElement | null>, () => emit("close"));
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      ref="popupRef"
      class="bg-gray px-[52px] py-10 rounded-lg w-[536px] relative"
    >
      <button
        class="absolute top-5 right-5 text-black text-xl"
        @click="$emit('close')"
      >
        <Icon
          name="icon:close"
          size="20px"
        />
      </button>
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-4">
          <h2 class="text-lg font-bold text-center">
            Language
          </h2>
          <select
            v-model="selectedLanguage"
            class=" custom-select w-full border border-black px-5 py-4"
          >
            <option value="CZ">
              Česká republika
            </option>
            <option value="SK">
              Slovensko
            </option>
            <option value="EN">
              USA
            </option>
          </select>
        </div>
        <div class="flex flex-col gap-4">
          <h2 class="text-lg font-bold text-center">
            Currency
          </h2>
          <select
            v-model="selectedCurrency"
            class="custom-select w-full border border-black px-5 py-4"
          >
            <option value="Kč">
              Česká koruna
            </option>
            <option value="EUR">
              Euro
            </option>
            <option value="USD">
              USD
            </option>
          </select>
        </div>
        <AppPrimaryButton
          class="text-center"
          @click="submit"
        >
          Shop now
        </AppPrimaryButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-select {
  appearance: none;
  background-image: url("/assets/icons/arrow.svg");
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 16px 16px;
}
</style>
