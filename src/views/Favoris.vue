<template>
  <b-container class="d-flex align-center flex-column">
    <div>
      <h1 class="text-center">Favoris</h1>
      <div class="d-flex">
        <b-card
          v-for="filmData in films"
          :key="filmData.Title"
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
    </div>
  </b-container>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "Favori",
  data() {
    return {
      films: []
    };
  },
  mounted() {
    this.films = [...this.$store.getters.favorites];
  }
};
</script>

<style></style>