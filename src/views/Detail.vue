<template>
  <div class="container">
    <div class="canvas" v-show="loading">
      <div class="spinner"></div>
    </div>
    <h2>
      {{movie.title}}
      <span class="year">({{movie.year}})</span>
    </h2>
    <div class="box">
      <div class="left">
        <img :src="movie.images.large" :alt="movie.title">
      </div>
      <div class="main">
        <div>导演：{{getDirectors}}</div>
        <div>主演：{{getCasts}}</div>
        <div>电影类型：{{getGenres}}</div>
        <div>制片国家地区：{{getCountries}}</div>
        <div>
          评分：
          <span class="bold">{{movie.rating.average}}</span>
          ({{movie.ratings_count}}人参与评分)
        </div>
        <div>
          <h4>{{movie.title}}剧情介绍</h4>
          {{movie.summary}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      movie: {
        title: "",
        year: "",
        directors: "",
        casts: "",
        genres: "",
        images: {
          large: ""
        },
        rating: {
          average: 0
        }
      }
    };
  },
  activated() {
    // console.log("activated");
    this.getMovieDetail();
  },
  methods: {
    getMovieDetail() {
      let detailUrl = "/api/movie/subject/" + this.$route.params.id;
      this.$axios
        .get(detailUrl)
        .then(res => {
          this.movie = res.data;
          this.loading = false;
        })
        .catch(err => console.log(err));
    },
    filterData(obj) {
      let arr = [];
      if (!obj || obj.length == 0) {
        return "";
      }
      for (let i = 0; i < obj.length; i++) {
        arr.push(obj[i].name || obj[i]);
      }
      return arr.join(" / ");
    }
  },
  computed: {
    getDirectors() {
      return this.filterData(this.movie.directors);
    },
    getCasts() {
      return this.filterData(this.movie.casts);
    },
    getGenres() {
      return this.filterData(this.movie.genres);
    },
    getCountries() {
      return this.filterData(this.movie.countries);
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 120px 0 50px 0;
}
h2 > span.year {
  color: #888;
}
span.bold {
  font-weight: bold;
}
.box {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.left {
  width: 200px;
  height: 300px;
}

.left img {
  width: 100%;
  height: 100%;
}

.main {
  margin-left: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
h4 {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>