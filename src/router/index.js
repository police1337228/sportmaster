import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import About from "../components/About.vue";
import ArticleForm from "../components/ArticleForm.vue";
import Article from "../components/Article.vue";
import ArticleList from "../components/ArticleList.vue";
import store from "@/store";

Vue.use(VueRouter);
Vue.use(store);

const routes = [
  {
    path: "/",
    name: "home",
    component: ArticleList,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/add",
    name: "add",
    component: ArticleForm,
  },
  {
    path: "/article/:id",
    component: Article,
    props: (route) => store.state.articles.find((x) => x.id == route.params.id),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
