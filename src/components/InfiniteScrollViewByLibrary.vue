<template>
  <div
    v-infinite-scroll="fetchData"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="500"
  >
    <List :list="pokeList" />
  </div>
</template>

<script>
import Vue from "vue";
import infiniteScroll from "vue-infinite-scroll";
import { INITIAL_DOMAIN, common } from "../api";
import List from "./List";
Vue.use(infiniteScroll);

export default {
  components: { List },
  data() {
    return {
      pokeList: [],
      prev: "",
      next: "",
      isLoading: false
    };
  },
  methods: {
    fetchData(url = INITIAL_DOMAIN) {
      this.isLoading = true;
      console.log(this.next);
      common
        .fetchList(this.next || url)
        .then(obj => {
          this.prev = obj.prev;
          this.next = obj.next;
          this.pokeList = this.pokeList.concat(obj.list);
          this.isLoading = false;
        })
        .finally(_ => {
          if (!this.prev) {
            this.fetchData(this.next);
          }
          this.isLoading = false;
        });
    }
  }
};
</script>

<style></style>
