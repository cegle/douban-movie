<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="['page-item', {'disabled': index === 1}]">
        <a class="page-link" tabindex="-1" @click="prev">上一页</a>
      </li>
      <li :class="['page-item','disabled']" v-if="showPrevMore">
        <a class="page-link" href="#">...</a>
      </li>
      <li
        :class="['page-item',{'active':index === item}]"
        v-for="item in pagesList"
        :key="item"
        @click="go(item)"
      >
        <a class="page-link">{{item}}</a>
      </li>
      <li :class="['page-item','disabled']" v-if="showNextMore">
        <a class="page-link" href="#">...</a>
      </li>
      <li :class="['page-item',{'disabled': index === pages}]">
        <a class="page-link" @click="next">下一页</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    //可见页码数
    showPages: {
      type: Number,
      default: 5
    },
    pageIndex: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 18
    },
    total: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      index: this.pageIndex, //当前页码
      limit: this.pageSize, //每页条数
      counts: this.total, //总条数
      showPrevMore: false,
      showNextMore: false
    };
  },
  methods: {
    prev() {
      if (this.index > 1) {
        this.go(this.index - 1);
      }
    },
    next() {
      if (this.index < this.pages) {
        this.go(this.index + 1);
      }
    },
    go(page) {
      if (this.index !== page) {
        this.index = page;
        this.$emit("change", this.index);
      }
    }
  },
  computed: {
    //计算总页码
    pages() {
      return Math.ceil(this.counts / this.limit);
    },
    pagesList() {
      const array = [];
      const showPages = this.showPages;
      const pageCount = this.pages;
      let current = this.index;
      const _offset = (showPages - 1) / 2;
      const offset = {
        start: current - _offset,
        end: current + _offset
      };

      if (offset.start < 1) {
        offset.end = offset.end + (1 - offset.start);
        offset.start = 1;
      }
      if (offset.end > pageCount) {
        offset.start = offset.start - (offset.end - pageCount);
        offset.end = pageCount;
      }
      if (offset.start < 1) {
        offset.start = 1;
      }

      this.showPrevMore = offset.start > 1;
      this.showNextMore = offset.end < pageCount;

      for (let i = offset.start; i <= offset.end; i++) {
        array.push(i);
      }
      return array;
    }
  },
  watch: {
    total(val) {
      this.counts = val || 1;
    },
    pageIndex(val) {
      this.index = val || 1;
    },
    pageSize(val) {
      this.limit = val || 18;
    }
  }
};
</script>

<style scoped>
nav {
  margin: 15px 0 30px 0;
}
.disabled {
  cursor: not-allowed;
}
</style>