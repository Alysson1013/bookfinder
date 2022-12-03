<template>
  <div class="w-full bg-white content-center mt-16">
    <div
      class="flex flex-col h-full mx-auto max-w-screen-lg content-center items-center"
    >
      <p class="font-poppins w-3/4 text-center">
        You don't need to know the name of the book, if you know the name of the
        author or publisher, just type, search and find
      </p>
      <input
        v-model="query"
        class="shadow font-poppins appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-20"
        placeholder="Type, author, book, name..."
        @input="handleInput"
      />
      <template v-if="!!store.state.loading">
        <Loading />
      </template>
      <template v-else>
        <Search />
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Search from "@/components/Search.vue";
import Loading from "@/components/Loading.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "SearchPage",
  components: {
    Search,
    Loading,
  },
  data() {
    return {
      query: "",
    };
  },
  setup() {
    const store = useStore();

    return {
      store,
      books: computed(() => store.state.books),
    };
  },
  methods: {
    handleInput(event: any) {
      this.store.commit("SEARCH_BOOKS", this.query);
    },
  },
});
</script>
