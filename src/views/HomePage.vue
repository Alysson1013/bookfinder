<!-- eslint-disable vue/valid-template-root -->
<template>
  <MainNav />
  <MainSection />
  <CustomSection
    title="READING PRACTICE IMPROVES VOCABULARY"
    describe="Whether for pleasure, study or information, reading practice improves vocabulary and streamlines reasoning and interpretation."
    image="undraw_mathematics.png"
  />
  <CustomSection
    title="ADVANCING TECHNOLOGY"
    describe="With the advancement of technologies in the modern world, people are less and less interested in reading."
    image="undraw_lost.png"
    :reverse="true"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainNav from "@/components/MainNav.vue";
import MainSection from "@/components/MainSection.vue";
import CustomSection from "@/components/CustomSection.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    MainNav,
    MainSection,
    CustomSection,
  },
});
</script>
