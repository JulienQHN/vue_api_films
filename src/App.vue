<template>
  <div>
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/favori">favoris</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
</style>

