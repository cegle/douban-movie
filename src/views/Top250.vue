<template>
  <div class="top250">
    <movie-list :movie-type="movieType" ref="updateList"></movie-list>
  </div>
</template>

<script>
import movieList from "../components/MovieList";
export default {
  data() {
    return {
      movieType: "top250"
    };
  },
  components: { "movie-list": movieList },
  mounted() {
    this.$refs.updateList.getMovieList();
  }
};
</script>