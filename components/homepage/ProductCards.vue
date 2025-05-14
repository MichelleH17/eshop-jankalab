<script setup lang="ts">
const { data: products } = await useFetch<IProduct[]>("/api/products");
</script>

<template>
  <div class="space-y-20 py-10 flex flex-col">
    <HomepageProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
