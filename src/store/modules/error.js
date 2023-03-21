import { fetchArticles as fetchArticlesList } from "../services/fetch";

export default {
  state: {
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
  },
  actions: {
    fetchArticles({ commit, state }) {
      const a = fetchArticlesList();
      commit("setArticles");
    },
  },
  modules: {},
};
