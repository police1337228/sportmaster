<template>
  <v-col cols="12" md="6" sm="12" xl="3">
    <v-card
      width="400"
      title="This is a title"
      subtitle="This is a subtitle"
      text="This is content"
      class="article mt-5"
      :class="completed ? 'outlined active' : 'outline no'"
    >
      <v-img
        src="https://picsum.photos/510/300?random"
        aspect-ratio="1.7"
      ></v-img>
      <p :style="{ fontStyle: titleStyle }" class="mt-2">
        {{ newTitle ? newTitle : "" }}
      </p>
      <hr />
      {{ body ? body : "" }}
      <Button text="Изменить" @click.native="changeArticle" /><br />
      <v-btn link :to="articleUrl">To article</v-btn>
    </v-card>
  </v-col>
</template>

<script>
import { Types } from "@/store/types";
import { mapActions } from "vuex";
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
    ...mapActions(["setArticle"]),
    changeArticle() {
      this.setArticle(this.id);
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
  border: 1px solid green !important;
  padding: 20px;
}
.no {
  border: 1px solid red !important;
  padding: 20px;
}
</style>
