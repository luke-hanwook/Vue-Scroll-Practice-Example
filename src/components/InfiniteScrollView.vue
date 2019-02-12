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
      isLoading: false,
      page: 1
    };
  },
  created() {
    this.fetchData();
  },
  mounted() {
    this.scroll();
  },
  watch: {
    page(num) {
      this.fetchData(this.next);
    }
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
    scroll() {
      document.addEventListener("scroll", () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.page++;
        }
      });
    }
  }
};
</script>

<style></style>
