<template>
  <div>
    <form class="form" @submit.prevent="addArticle">
      <input type="text" placeholder="Title" v-model="article.title" />
      <input type="text" placeholder="Author" v-model="article.body" /><textarea
        placeholder="Body"
      ></textarea>
      <label
        ><input type="checkbox" v-model="article.completed" /> Published</label
      >
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
import { Types } from "@/store/types";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ArticleForm",
  data: () => {
    return {
      article: {
        title: "",
        body: "",
        completed: false,
      },
    };
  },
  methods: {
    ...mapActions(["pushArticle"]),
    ...mapGetters(["getArticlesLength"]),
    addArticle() {
      this.pushArticle({ ...this.article, id: this.getArticlesLength() + 1 });
      this.$router.push("/");
    },
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
