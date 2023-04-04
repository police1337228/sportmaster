<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>mdi-information-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/add">
          <v-list-item-action>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Add article</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Sportmaster</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="" fluid>
        <v-row justify="center">
          <v-col class="text-center"> <router-view /> </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2023 Sportmaster</span>
    </v-footer>
    <!-- <v-layout>
      <v-app-bar app>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-app-bar-title>
          <h3 class="text-h4 blue--text">Sportmaster</h3>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/add">Add article</router-link>
        </nav>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
      
    </v-layout>
    <v-footer>
      <v-row justify="center" no-gutters location="bottom">
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Sportmaster</strong>
        </v-col>
      </v-row>
    </v-footer> -->
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
// import { Types } from "./store/types";

export default {
  methods: mapActions(["fetchArticles"]),
  data: () => {
    return {
      drawer: false,
    };
  },
  created() {
    this.fetchArticles();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: darkcyan;
}
</style>
