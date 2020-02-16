<template>
  <div class="d-flex">
    <b-card
      :title="filmData.Title"
      :img-src="filmData.Poster"
      :img-alt="filmData.Title"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ filmData.Plot }},
        <br />
        <br />
        Année de sortie : {{ filmData.Year }}
      </b-card-text>
      <b-button href="#" variant="primary" @click="addFavoris(filmData)">+ favoris</b-button>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "Card",
  props: {
    film: String
  },
  data() {
    return {
      filmData: {}
    };
  },
  methods: {
    addFavoris: function(filmData) {
      this.$store.commit("addFavoris", filmData);
    }
  },
  mounted() {
    axios
      .get("http://www.omdbapi.com/?i=" + this.film + "&apikey=9f694e64")
      .then(response => (this.filmData = response.data));
  }
};
</script>

<style></style>