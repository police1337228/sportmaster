import { fetchArticles as fetchArticlesList } from "../services/fetch";

export default {
  state: {
    articles: [],
    loading: false,
    error: "",
  },
  getters: {
    getArticles(state) {
      return state.articles;
    },
    getArticlesLength(state) {
      return state.articles.length;
    },
    isLoading(state) {
      return state.loading;
    },
    isError(state) {
      return state.error;
    },
  },
  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    },
    pushArticle(state, article) {
      state.articles.push(article);
    },
    setArticle(state, id) {
      state.articles.forEach((a) => {
        if (a.id === id) {
          a.completed = !a.completed;
        }
      });
    },
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
    async fetchArticles({ commit, state }) {
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
  },
};
