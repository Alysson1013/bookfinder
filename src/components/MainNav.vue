<template>
  <div class="top-0 left-0 w-full h-16 bg-white content-center">
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
        <a href="https://github.com/Alysson1013" target="_blank"> About </a>
        <a
          href="https://br.linkedin.com/in/alysson-eduardo-a358911a4?trk=people-guest_people_search-card"
          target="_blank"
        >
          Contact
        </a>
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
