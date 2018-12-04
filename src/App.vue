<template>
  <div id="app">
    <v-header></v-header>
    <div class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "./components/Header";
import vFooter from "./components/Footer";
export default {
  components: {
    vHeader,
    vFooter
  }
};
</script>
