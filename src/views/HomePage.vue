<!-- eslint-disable vue/valid-template-root -->
<template>
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
  <CustomSection
    title="DYNAMIC READING"
    describe="Dynamic and relaxed reading is one of the best ways to acquire information. The ideal is to learn to read informative texts, scientific articles, textbooks, educational books, etc."
    image="undraw_bibliophile.png"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainSection from "@/components/MainSection.vue";
import CustomSection from "@/components/CustomSection.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    MainSection,
    CustomSection,
  },
});
</script>
