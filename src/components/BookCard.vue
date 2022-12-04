<template>
  <div
    class="flex flex-col bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 cursor-pointer"
  >
    <img :src="image" />
    <div class="flex flex-col pl-4">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-4">
        {{ title?.length > 27 ? title?.substring(0, 24) + "..." : title }}
      </h5>
      <p class="mb-3 font-normal text-gray-700 max-w-2xl max-h-2xl">
        {{
          describe?.length > 80 ? describe?.substring(0, 77) + "..." : describe
        }}
      </p>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "BookCard",
  props: {
    image: String,
    title: String,
    describe: String,
  },
});
</script>
