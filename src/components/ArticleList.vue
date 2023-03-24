<template>
  <div class="hello">
    <ul>
      <Loader v-if="articles.length < 1" />
      <Article
        v-else
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :body="article.body"
        :completed="article.completed"
        :id="article.id"
        @changeArticle="setArticle"
      />
    </ul>
  </div>
</template>

<script>
import store from "@/store";
import Article from "./Article";
import Loader from "./Loader.vue";
export default {
  name: "ArticleList",
  components: {
    Article,
    Loader,
  },
  data: () => {
    return {};
  },
  async mounted() {},
  computed: {
    articles() {
      return store.getArticles();
    },
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
