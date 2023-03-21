export async function fetchArticles() {
  let ar = [];
  await fetch("/articles.json")
    .then((res) => res.json())
    .then((articles) => {
      ar = articles;
    })
    .catch((e) => {
      throw new Error("Ошибка! Повторите загрузку!");
    });
  return ar;
}
