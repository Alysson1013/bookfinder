<template>
  <div class="w-full bg-white content-center mt-24">
    <div class="flex flex-row h-full px-8 mx-auto max-w-screen-lg">
      <div class="w-1/2">
        <p class="text-5xl font-poppins font-medium text-brand-gray-2">
          Find the <span class="text-brand-green-1">books</span> you are looking
          for anywhere
        </p>
        <p class="font-poppins mt-8">
          Search for books anywhere, you don't need to know the name of the
          book, if you know the name of the author or the publisher, just type
          and search.
        </p>
        <button
          class="bg-brand-green-1 hover:brand-green-2 py-2 px-4 text-white font-poppins font-semibold rounded-md text-sm w-40 mt-8"
          @click="goToSearch"
        >
          Search now
        </button>
      </div>
      <div class="w-1/2">
        <img src="@/assets/undraw_organizer.png" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainSection",
  methods: {
    goToSearch() {
      this.$router.push("/search");
    },
  },
});
</script>
