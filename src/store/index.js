import Vue from "vue";
import Vuex from "vuex";
import articles from "./modules/articles";
import error from "./modules/error";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { articles, error },
});
