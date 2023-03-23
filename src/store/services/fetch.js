import Vue from "vue";
import axios from "axios";

let controller = new AbortController();
let articlesCanceled = false;

export async function fetchArticles() {
  if (articlesCanceled) {
    articlesCanceled = false;
    controller = new AbortController();
  }
  let ar = [];
  await Vue.axios
    .get("http://localhost:10000/articles", {
      signal: controller.signal,
    })
    .then((res) => res.data)
    .then((articles) => {
      ar = articles;
    })
    .catch(function (e) {
      if (axios.isCancel(e)) {
        throw new Error("Загрузка отменена!");
      } else {
        throw new Error("Ошибка! Повторите загрузку!");
      }
    });
  return ar;
}

export async function abortArticles() {
  controller.abort();
  articlesCanceled = true;
}
