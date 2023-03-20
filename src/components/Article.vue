<template>
  <li class="article" :class="completed ? 'active' : 'not'">
    <p :style="{ fontStyle: titleStyle }">{{ newTitle ? newTitle : "" }}</p>
    <hr />
    {{ body ? body : "" }}
    <Button text="Изменить" @click.native="changeArticle" /><br /><br />
    <router-link :to="articleUrl">To article</router-link>
  </li>
</template>

<script>
import store from "@/store";
export default {
  name: "Article",
  data: () => {
    return {};
  },
  props: {
    title: String,
    body: String,
    completed: Boolean,
    id: Number,
  },
  computed: {
    newTitle() {
      return this.title.toString().toUpperCase();
    },
    titleStyle() {
      return this.completed ? "italic" : "normal";
    },
    articleUrl() {
      return "/article/" + this.id;
    },
  },
  methods: {
    changeArticle() {
      store.setArticle(this.id);
    },
  },
  watch: {
    completed(newv, oldv) {
      console.log(oldv, newv);
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
.active {
  border: 1px solid green;
  padding: 20px;
}
.not {
  border: 1px solid red;
  padding: 20px;
}
</style>
