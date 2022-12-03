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
    LOADING_STATUS(state, loading) {
      state.loading = loading;
    },
    async SEARCH_BOOKS(state, query) {
      const { commit } = VuexUseStore();

      commit("LOADING_STATUS", true);

      state.books = await fetchBooks(query);

      commit("LOADING_STATUS", true);
    },
  },
});

export function useStore(): Store<State> {
  return VuexUseStore(key);
}
