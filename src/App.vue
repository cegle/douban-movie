<template>
  <div id="app">
    <v-header></v-header>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import vHeader from "./components/Header";
export default {
  components: {
    vHeader
  }
};
</script>
