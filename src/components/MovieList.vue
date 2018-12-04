<template>
  <div class="container">
    <div class="canvas" v-show="loading">
      <div class="spinner"></div>
    </div>
    <h2>{{title}}</h2>
    <div class="row">
      <div class="col-md-2 center-block" v-for="item in list" :key="item.id">
        <router-link :to="{path:'/detail/' + item.id}">
          <img class="img-responsive" :src="getImg(item.images.large)" :alt="item.title">
        </router-link>
        <div class="rating text-center">评分：{{item.rating.average}}</div>
        <router-link :to="{path:'/detail/' + item.id}">
          <div class="title text-center">{{item.title}}</div>
        </router-link>
      </div>
    </div>
    <pagination :page-index="currentPage" :total="total" :page-size="pageSize" @change="pageChange"></pagination>
  </div>
</template>

<script>
import pagination from "./Pagination";
export default {
  data() {
    return {
      title: "",
      loading: true,
      list: [],
      total: 0,
      currentPage: 1,
      pageSize: 18
    };
  },
  components: { pagination },
  props: ["movieType"],
  mounted() {
    this.getMovieList();
  },
  methods: {
    getImg(imgUrl) {
      if (imgUrl !== undefined) {
        let _url = imgUrl.substring(7);
        //用下面这个网站去缓存豆瓣电影的图,防止403
        return "https://images.weserv.nl/?url=" + _url;
      }
    },
    getMovieList() {
      //   console.log(this.$route);
      this.loading = true;
      let params = {
          start:
            this.currentPage > 1
              ? (this.currentPage - 1) * this.pageSize + 1
              : 0,
          count: this.pageSize,
          city: "合肥"
        },
        movieUrl = "/api/movie/" + this.movieType;
      if (this.movieType == "search") {
        params["q"] = this.$route.params.searchKey;
      }
      this.$axios
        .post(movieUrl, params)
        .then(res => {
          console.log(res.data);
          this.list = res.data.subjects;
          this.title = res.data.title;
          this.total = res.data.total;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    pageChange(page) {
      this.currentPage = page;
      this.getMovieList();
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 15px 0;
}
img {
  display: inline-block;
  width: 100%;
  height: 230px;
  vertical-align: middle;
}
.row > div {
  margin-bottom: 20px;
}
.rating {
  white-space: nowrap;
  color: #3b3b3b;
  margin-top: 10px;
}
.title {
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>