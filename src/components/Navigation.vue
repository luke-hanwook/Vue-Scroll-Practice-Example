<template>
  <div>
    <ul @click="onClickNavigationButton">
      <li><router-link to="/">MoreButton</router-link></li>
      <li><router-link to="/infinite">InfiniteScroll</router-link></li>
      <li>
        <router-link to="/infiniteByLibrary"
          >InfiniteScrollByLibrary</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    onClickNavigationButton(e) {
      e.preventDefault();
      if (e.target.name) {
        this.$emit("change-component", { targetName: e.target.name });
      }
    }
  }
};
</script>

<style scoped>
ul {
  display: inline-block;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  margin: 10px;
}
</style>
