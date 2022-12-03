<!-- eslint-disable vue/valid-template-root -->
<template>
  <MainNav />
  <MainSection />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNav from "@/components/MainNav.vue";
import MainSection from "@/components/MainSection.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    MainNav,
    MainSection,
  },
});
</script>
