<template>
  <v-sheet class="hello">
    <div v-if="isLoading">
      <Loader />
      <v-row>
        <v-col col="3">
          <v-btn inline-block @click.prevent="abortArticles" class="ma-2">
            Отменить загрузку
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div v-else-if="isError">
      {{ isError }}
      <v-row>
        <v-col col="3">
          <v-btn inline-block @click.prevent="fetchArticles" class="ma-2"
            >Повторить загрузку</v-btn
          >
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-row>
        <v-col col="12">
          <p class="text-h3">Количество статей: {{ getArticlesLength }}</p>
        </v-col>
      </v-row>
      <v-row class="flex-wrap pa-2">
        <Article
          v-for="article in getArticles"
          :key="article.id"
          :title="article.title"
          :body="article.body"
          :completed="article.completed"
          :id="article.id"
        />
      </v-row>
    </div>
  </v-sheet>
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
@media screen and (max-width: 768px) {
  .text-h2 {
    font-size: 12px !important;
  }
}
</style>
