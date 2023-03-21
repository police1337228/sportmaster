<template>
  <div class="hello">
    <!-- <ArticleForm @addArticle="pushArticle" /> -->
    <Loader v-if="isLoading" />
    <div v-else-if="isError">
      {{ isError }} <br />
      <br />
      <button @click.prevent="fetchArticles">Повторить загрузку</button>
    </div>
    <div v-else>
      <p>Количество статей: {{ getArticlesLength }}</p>
      <ul>
        <Article
          v-for="article in getArticles"
          :key="article.id"
          :title="article.title"
          :body="article.body"
          :completed="article.completed"
          :id="article.id"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Article from "./Article";
import Loader from "./Loader.vue";
export default {
  name: "ArticleList",
  components: {
    Article,
    Loader,
  },
  computed: {
    ...mapGetters(["isLoading", "getArticles", "getArticlesLength", "isError"]),
  },
  methods: {
    ...mapActions(["fetchArticles"]),
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
