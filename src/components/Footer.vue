<template>
  <div class="w-full h-12 mt-20 bottom-0 bg-brand-gray">
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
        class="flex items-center h-full text-x1 font-alexandria font-semibold text-xl text-brand-green-1 flex-row justify-between w-16"
      >
        <a href="https://github.com/Alysson1013" target="_blank">
          <img src="@/assets/github-11-24.png" />
        </a>
        <a
          href="https://br.linkedin.com/in/alysson-eduardo-a358911a4?trk=people-guest_people_search-card"
          target="_blank"
        >
          <img src="@/assets/linkedin-3-24.png" />
        </a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterNav",
});
</script>
