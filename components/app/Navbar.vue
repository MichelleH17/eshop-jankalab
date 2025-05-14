<script setup lang="ts">
import { useCartStore } from "~/stores/CartStore";

const cartStore = useCartStore();
const isPopupOpen = ref(false);

const selectedLanguage = ref("EN");
const selectedCurrency = ref("Kč");

onMounted(() => {
  const storedLanguage = localStorage.getItem("selectedLang");
  const storedCurrency = localStorage.getItem("selectedCurrency");

  if (storedLanguage)
    selectedLanguage.value = storedLanguage;
  if (storedCurrency)
    selectedCurrency.value = storedCurrency;
});

function togglePopup() {
  isPopupOpen.value = !isPopupOpen.value;
}

function updateLanguageAndCurrency({
  lang,
  currency,
}: {
  lang: string;
  currency: string;
}) {
  selectedLanguage.value = lang;
  selectedCurrency.value = currency;
  togglePopup();
}
</script>

<template>
  <nav
    class="sticky top-0 z-20 bg-white px-[47px] py-3 md:py-8 flex justify-between items-center"
  >
    <NuxtImg
      src="/images/logo-jan-kalab.png"
      alt="Jan Kaláb logo"
      class="h-[14px] md:h-[19px]"
    />
    <NuxtImg
      src="/images/logo-one-point.png"
      alt="One Point logo"
      class="h-[52px] md:h-[72px]"
    />
    <div class="flex items-center">
      <button
        class="text-lg font-black cursor-pointer mr-7 font-youth md:font-montserrat"
        @click="togglePopup"
      >
        <span>{{ selectedLanguage }}</span>
        <span class="font-normal">/</span>
        <span>{{ selectedCurrency }}</span>
      </button>
      <AppPopupLocationSelection
        :is-open="isPopupOpen"
        @close="togglePopup"
        @update="updateLanguageAndCurrency"
      />
      <div class="relative">
        <Icon
          name="icon:cart"
          size="20"
          class="mt-1"
        />
        <div
          v-if="cartStore.itemCount"
          class="absolute top-[11px] right-[-10px] w-[18px] h-[18px] rounded-[15px] border border-black flex items-center justify-center font-youth font-black text-[10px] bg-white text-black"
        >
          {{ cartStore.itemCount }}
        </div>
      </div>
    </div>
  </nav>
</template>
