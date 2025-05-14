<script setup lang="ts">
import { useHead } from "@vueuse/head";

import { useCartStore } from "~/stores/CartStore";

const { product } = defineProps<{
  product: IProduct;
}>();

const cartStore = useCartStore();

const isHovered = ref(false);

useSeoMeta({
  title: product.name,
  description: product.description,
  ogUrl: "[og:url]",
  twitterTitle: product.name,
  twitterDescription: product.description,
  twitterImage: product.image,
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { property: "og:title", content: product.name },
    { property: "og:description", content: product.description },
    { property: "og:image", content: product.image },
    { property: "og:type", content: "product" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>

<template>
  <section>
    <div
      class="flex flex-col md:flex-row items-center gap-6 justify-center px-[47px] mx-auto"
    >
      <div class="relative">
        <NuxtImg
          :src="product.image"
          :alt="product.name"
          width="424px"
          height="600px"
        />
        <Icon
          :name="isHovered ? 'icon:zoom-hover' : 'icon:zoom'"
          size="40"
          class="absolute top-2 right-2 cursor-pointer"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
        />
      </div>

      <div class="flex flex-col text-center md:text-start gap-10 w-[423px]">
        <h2>
          {{ product.name }}
        </h2>
        <p class="text-lg">
          {{ product.description }}
        </p>
        <h3>
          {{ product.price }} CZK
        </h3>
        <AppPrimaryButton @click="cartStore.addItem()">
          Add to cart
        </AppPrimaryButton>
      </div>
    </div>
  </section>
</template>
