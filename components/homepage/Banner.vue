<script setup lang="ts">
import { useIntervalFn } from "@vueuse/core";

const images = [
  "/images/banner1.png",
  "/images/banner2.png",
];
const currentImage = ref(images[0]);

function toggleImages() {
  const currentIndex = images.indexOf(currentImage.value);
  currentImage.value = images[(currentIndex + 1) % images.length];
}

useIntervalFn(toggleImages, 9000);

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.matchMedia("(max-width: 640px)").matches;
});

const displayedImage = computed(() => {
  return isMobile.value ? "/images/banner3.png" : currentImage.value;
});
</script>

<template>
  <section>
    <NuxtImg
      :src="displayedImage"
      alt="Banner"
      class="w-full h-[400px]"
    />
  </section>
</template>
