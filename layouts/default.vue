<template>
  <div class="min-h-screen flex flex-col bg-white text-primary">
    <AppNavbar />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
