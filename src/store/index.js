// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

var store = {
  state: {
    articles: [] || this.fetchArticles,
  },
  async fetchArticles() {
    await fetch("/articles.json")
      .then((res) => res.json())
      .then((articles) => (this.state.articles = articles));
  },
  pushArticle(a) {
    let ar = { ...a, id: this.state.articles.length + 1 };
    this.state.articles.push(ar);
  },
  setArticle(id) {
    this.state.articles.forEach((a) => {
      if (a.id === id) {
        a.completed = !a.completed;
      }
    });
  },
  getArticles() {
    return this.state.articles;
  },
};

export default store;
