<template>
  <div class="search">
    <movie-list :movie-type="movieType" ref="updateList"></movie-list>
  </div>
</template>

<script>
import movieList from "../components/MovieList";
export default {
  data() {
    return {
      movieType: "search"
    };
  },
  components: { "movie-list": movieList },
  watch: {
    $route(to, from) {
      //防止返回重复调用
      if (to.path.indexOf("/search/") == 0) {
        //调用子组件方法
        this.$refs.updateList.getMovieList();
      }
    }
  }
};
</script>