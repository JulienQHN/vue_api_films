import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: []
  },
  getters: {
    favorites: state => state.favorites
  },
  mutations: {
    addFavoris(state, favorites) {
      state.favorites.push(favorites);
    }
  }
});
