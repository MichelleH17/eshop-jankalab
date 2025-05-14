<script setup lang="ts">
const email = ref("");
const success = ref(false);
const error = ref("");

function handleSubmit() {
  error.value = "";

  const emailRegex = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    error.value = "Invalid email address";
    return;
  }
  success.value = true;
  email.value = "";
}
</script>

<template>
  <section class="flex flex-col px-[47px] gap-4">
    <h2>Don’t miss the next drop</h2>
    <div class="flex flex-col md:flex-row items-center justify-between gap-5 md:space-x-4">
      <p class="text-[22px]">
        Subscribe to our newsletter and receive notification about new releases.
        <br>
        You can unsubscribe any time.
      </p>
      <div class="text-lg w-full md:w-[424px]">
        <form
          class="flex flex-row items-center justify-center text-gray_dark"
          @submit.prevent="handleSubmit"
        >
          <input
            v-model="email"
            placeholder="your@email.com"
            class="px-5 py-2 border border-black rounded-l-xl w-full font-youth"
          >
          <button
            type="submit"
            class="bg-black hover:bg-white border-black border-y border-r text-white hover:text-black px-5 py-2 rounded-r-xl font-youth"
          >
            Subscribe
          </button>
        </form>
        <p
          v-if="error"
          class="text-red-500 mt-2"
        >
          {{ error }}
        </p>
        <p
          v-if="success"
          class="text-green-500 mt-2"
        >
          Subscription successful!
        </p>
      </div>
    </div>
    <div class="flex flex-col md:flex-row md:justify-between md:items-center mt-1 md:mt-6 gap-4">
      <div class="flex flex-col md:flex-row items-center gap-6 text-lg">
        <div class="flex flex-row items-center gap-6">
          <a
            href="#"
            aria-label="Instagram"
          >
            <Icon
              name="icon:instagram"
              size="20"
            />
          </a>
          <a
            href="#"
            aria-label="Facebook"
          >
            <Icon
              name="icon:facebook"
              size="20"
            />
          </a>
          <a
            href="#"
            aria-label="YouTube"
          >
            <Icon
              name="icon:youtube"
              size="20"
            />
          </a>
        </div>
        <div class="flex flex-row items-center gap-4">
          <a
            href="jankalab.com"
            class="hover:underline"
          > jankalab.com </a>
          <a
            href="mailto:studio@onepoint.cz"
            class="hover:underline"
          >
            studio@onepoint.cz
          </a>
        </div>
      </div>
      <div class="flex flex-row justify-center items-center gap-10 text-lg">
        <a
          href="#"
          class="hover:underline whitespace-nowrap"
        >
          Terms and Conditions
        </a>
        <a
          href="#"
          class="hover:underline"
        > GDPR </a>
      </div>
    </div>
  </section>
</template>
