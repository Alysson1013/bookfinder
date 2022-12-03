<template lang="">
  <div class="fixed top-0 left-0 w-full h-16 bg-white content-center">
    <div
      class="flex flex-nowrap flex-row justify-between h-full px-8 mx-auto max-w-screen-lg"
    >
      <a
        href="/"
        class="flex items-center h-full text-x1 font-alexandria font-semibold text-xl text-brand-green-1"
      >
        Bookfinder
      </a>
      <div
        class="flex items-center justify-between h-16 w-28 font-light text-brand-gray-1"
      >
        <a href="/"> About </a>
        <a href="/"> Contact </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainNav",
});
</script>
<style lang="css"></style>
