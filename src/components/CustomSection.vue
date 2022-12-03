<!-- eslint-disable vue/no-parsing-error -->
<template>
  <div class="w-full bg-white content-center mt-24">
    <div class="flex flex-row h-full px-8 mx-auto max-w-screen-lg">
      <div class="w-1/2">
        <template v-if="!reverse">
          <img :src="require(`@/assets/${image}`)" />
        </template>
        <template v-else>
          <p class="text-2xl font-poppins font-medium text-brand-gray-2 mt-20">
            {{ title }}
          </p>
          <p class="font-poppins mt-8">
            {{ describe }}
          </p>
        </template>
      </div>
      <div class="w-1/2">
        <template v-if="!reverse">
          <p class="text-2xl font-poppins font-medium text-brand-gray-2 mt-20">
            {{ title }}
          </p>
          <p class="font-poppins mt-8">
            {{ describe }}
          </p>
        </template>
        <template v-else>
          <img :src="require(`@/assets/${image}`)" />
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CustomSection",
  props: {
    title: String,
    describe: String,
    image: String,
    reverse: Boolean,
  },
});
</script>
