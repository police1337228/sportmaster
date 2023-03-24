<template>
  <div class="hello">
<<<<<<< HEAD
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
=======
    <!-- <ArticleForm @addArticle="pushArticle" /> -->
    <div v-if="isLoading">
      <Loader />
      <br />
      <br />
      <button @click.prevent="abortArticles">Отменить загрузку</button>
    </div>
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
>>>>>>> 72e049b0c17f5508739942bb52d2f40f306354d6
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
    ...mapActions(["fetchArticles", "abortArticles"]),
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
