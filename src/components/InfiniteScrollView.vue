<template>
  <div><List :list="pokeList" /><Loading v-if="isLoading" /></div>
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
  mounted() {
    this.scroll();
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
          }, 500);
        })
        .finally(_ => {
          setTimeout(_ => {
            this.isLoading = false;
          }, 500);
        });
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.fetchData(this.next);
        }
      };
    }
  }
};
</script>

<style></style>
