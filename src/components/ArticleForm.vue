<template>
  <v-sheet>
    <v-dialog width="600" class="outlined">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn>
      </template>
      <v-form
        @submit.prevent="addArticle"
        class="elevation-24"
        style="background: white"
      >
        <v-container>
          <v-row class="flex-column justify-center align-center">
            <v-col cols="12" md="6">
              <CustomTextfield
                v-model="article.title"
                :counter="25"
                label="Title"
                required
                dense
                :outlined="false"
                color="secondary"
              ></CustomTextfield>
            </v-col>
            <v-col cols="12" md="6">
              <v-textarea
                v-model="article.body"
                :counter="250"
                label="Todo"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="12" md="6">
              <v-checkbox
                v-model="article.completed"
                label="Completed?"
                required
              ></v-checkbox>
              <v-btn type="submit" block class="mt-2">
                <v-icon left dark> mdi-check </v-icon> Submit
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-dialog>
  </v-sheet>
</template>

<script>
import CustomTextfield from "./CustomTextfield.vue";
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
  components: {
    CustomTextfield,
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
