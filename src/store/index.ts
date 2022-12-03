import { createStore, Store, useStore as VuexUseStore } from "vuex";
import { IBook } from "@/types/IBooks";
import { InjectionKey } from "vue";
import { fetchBooks } from "@/services/fetchBooks";

interface State {
  books: IBook[];
  favorites: IBook[];
  loading: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  state: {
    books: [],
    favorites: [],
    loading: false,
  },
  mutations: {
    async SEARCH_BOOKS(state, query) {
      try {
        state.loading = true;

        state.books = await fetchBooks(query);
      } catch (err) {
        console.log(err);
      } finally {
        state.loading = false;
      }
    },
  },
});

export function useStore(): Store<State> {
  return VuexUseStore(key);
}
