<!-- eslint-disable vue/valid-template-root -->
<template>
  <MainNav />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNav from "@/components/MainNav.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    MainNav,
  },
});
</script>
