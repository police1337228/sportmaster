import {
  fetchArticles as fetchArticlesList,
  abortArticles as abortArticlesList,
} from "../services/fetch";
import axios from "axios";

export default {
  state: {
    loading: false,
    error: "",
  },
  getters: {
    isLoading(state) {
      return state.loading;
    },
    isError(state) {
      return state.error;
    },
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = Boolean(loading);
    },
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = "";
    },
  },
  actions: {
    async fetchArticles({ commit }) {
      commit("clearError");
      commit("setLoading", true);
      try {
        let a = await fetchArticlesList();
        commit("setArticles", a);
        commit("setLoading", false);
      } catch (e) {
        commit("setError", e.message);
        commit("setLoading", false);
      }
    },
    abortArticles({ commit }) {
      abortArticlesList();
      commit("setLoading", false);
    },
  },
};

// {
//   commit("setError", e.message);
//   commit("setLoading", false);
// }
