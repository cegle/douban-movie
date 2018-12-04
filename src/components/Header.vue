<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" style="color:#28a745;">豆瓣电影</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active">正在热映</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/top250" class="nav-link" active-class="active">Top250</router-link>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" @submit.prevent="submit">
        <input
          class="form-control mr-sm-4"
          type="text"
          placeholder="电影、影人、电视剧"
          aria-label="Search"
          v-model="searchKey"
        >
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      searchKey: ""
    };
  },
  methods: {
    submit() {
      if (!this.searchKey) {
        alert("请输入要查询的内容");
        return;
      }

      this.$router.push({
        path: "/search/" + this.searchKey
      });
      this.searchKey = "";
    }
  }
};
</script>

<style scoped>
form > input.form-control {
  width: 250px;
  border: 1px solid #009a61;
}
form > input.form-control:active {
  border: 1px solid #009a61;
}
form > input.form-control:focus {
  border: 1px solid #009a61;
  box-shadow: none;
}
</style>