<template>
  <div class="hello">
    <List :list="pokeList" /> <Loading v-if="isLoading" />
    <button v-else @click="onClickMoreBtn">더보기</button>
  </div>
</template>

<script>
import { INITIAL_DOMAIN, common } from "../api";
import List from "./List";

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
  created() {
    this.fetchData();
  },
  methods: {
    fetchData(url = INITIAL_DOMAIN) {
      this.isLoading = true;
      common
        .fetchList(url)
        .then(obj => {
          setTimeout(_ => {
            this.prev = obj.prev;
            this.next = obj.next;
            this.pokeList = this.pokeList.concat(obj.list);
          }, 600);
        })
        .finally(_ => {
          setTimeout(_ => {
            this.isLoading = false;
          }, 600);
        });
    },
    onClickMoreBtn(e) {
      this.fetchData(this.next);
    }
  }
};
</script>
