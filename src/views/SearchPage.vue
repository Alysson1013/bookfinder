<template>
  <div class="w-full h-full bg-white content-center mt-16">
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
      <template v-if="books.length === 0">
        <Search />
      </template>
      <div class="w-full grid grid-cols-3 gap-3 mt-20">
        <template v-for="book in books" :key="book.id">
          <BookCard
            :title="book.volumeInfo.title"
            :describe="book.volumeInfo.description"
            :image="book?.volumeInfo?.imageLinks?.thumbnail"
          />
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Search from "@/components/Search.vue";
import Loading from "@/components/Loading.vue";
import BookCard from "@/components/BookCard.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "SearchPage",
  components: {
    Search,
    Loading,
    BookCard,
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
    handleInput() {
      this.store.commit("SEARCH_BOOKS", this.query);
    },
  },
});
</script>
