export const Types = {
  mutations: {
    ARTICLES_REQUESTED: "ARTICLES_REQUESTED",
    ARTICLES_SUCCEEDED: "ARTICLES_SUCCEEDED",
    ARTICLES_FAILED: "ARTICLES_FAILED",
    ARTICLES_CANCELED: "ARTICLES_CANCELED",
    ARTICLE_ADD_REQUESTED: "ARTICLE_ADD_REQUESTED",
    ARTICLE_ADD_SUCCEDED: "ARTICLE_ADD_SUCCEDED",
    ARTICLE_ADD_FAILED: "ARTICLE_ADD_FAILED",
  },
  actions: {
    ARTICLES_LOAD: "fetchArticles",
    ARTICLES_LOAD_CANCEL: "abortArticles",
    ARTICLES_SET: "setArticles",
    ARTICLES_PUSH: "pushArticle",
    ARTICLE_SET: "setArticle",
  },
  getters: {
    GET_ARTICLES: "getArticles",
    GET_ARTICLES_LENGTH: "getArticlesLength",
  },
  request_status: {
    REQUESTED: "REQUESTED",
    SUCCEEDED: "SUCCEEDED",
    FAILED: "FAILED",
  },
};
