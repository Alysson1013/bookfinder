<template>
  <MainNav />
  <router-view />
  <FooterNav />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MainNav from "./components/MainNav.vue";
import FooterNav from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    MainNav,
    FooterNav,
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Alexandria:wght@600&display=swap");
</style>
