<template>
  <v-sheet>
    <p class="text-h3">About Page - Наша команда</p>
    <v-carousel height="300" hide-delimiters progress="primary">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet height="100%">
          <div class="d-flex fill-height flex-column">
            <v-img
              src="https://cdn.fishki.net/upload/post/2016/12/02/2153008/chihuahua-na-lugu.jpg"
              aspect-ratio="1.7"
              height="50"
            ></v-img>
            <p>Разработчик {{ slide }}</p>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Имя</th>
            <th class="text-center">Количество коммитов</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in people" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.commits }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-sheet>
</template>

<script>
export default {
  props: {
    text: String,
  },
  data() {
    return {
      people: [
        {
          name: "Илья",
          commits: 159,
        },
        {
          name: "Сергей",
          commits: 237,
        },
        {
          name: "Иван",
          commits: 262,
        },
        {
          name: "Денис",
          commits: 305,
        },
        {
          name: "Артурчик",
          commits: 356,
        },
      ],
      slides: ["Илья", "Сергей", "Иван", "Денис", "Артурчик"],
    };
  },
};
</script>

<style></style>
