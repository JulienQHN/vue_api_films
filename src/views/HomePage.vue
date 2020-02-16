<template>
  <b-container class="d-flex align-center flex-column">
    <h1 class="text-center">Films</h1>
    <div class="row d-flex justify-content-center">
      <div v-for="film in films" :key="film.imdbID">
        <Card class="d-flex justify-content-center" :film="film.imdbID"></Card>
      </div>
    </div>
  </b-container>
</template>

<script>
import Card from "./../components/card.vue";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "HomePage",
  components: {
    Card
  },
  data() {
    return {
      films: null
    };
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?s=batman&apikey=9f694e64")
      .then(response => (this.films = response.data.Search));
  }
};
</script>

<style>
</style>
