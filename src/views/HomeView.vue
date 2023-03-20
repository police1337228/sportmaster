<template>
  <div class="home">
    <ArticleList />
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleList from "@/components/ArticleList.vue";
export default {
  name: "HomeView",
  components: {
    ArticleList,
  },
};
</script>
