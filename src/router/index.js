import Vue from "vue";
import router from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(router);
import HomePage from "./../views/HomePage.vue";
import Favoris from "./../views/Favoris.vue";

export default new router({
  routes: [
    {
      path: "/",
      component: HomePage
    },
    {
      path: "/Favori",
      component: Favoris
    }
  ]
});
