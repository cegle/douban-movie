<template>
  <div class="movie-list">
    <movie-list :movie-type="movieType"></movie-list>
  </div>
</template>

<script>
import movieList from "../components/MovieList";
export default {
  data() {
    return {
      movieType: "in_theaters" //热映类型 movieType: in_theaters
    };
  },
  components: {
    "movie-list": movieList
  }
};
</script>