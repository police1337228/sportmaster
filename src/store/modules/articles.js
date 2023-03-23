export default {
  state: {
    articles: [],
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
    setArticles({ commit }, articles) {
      commit("setArticles", articles);
    },
    pushArticle({ commit }, article) {
      commit("pushArticle", article);
    },
    setArticle({ commit }, id) {
      commit("setArticle", id);
    },
  },
};
