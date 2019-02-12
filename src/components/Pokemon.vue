<template>
  <div>
    <Loading v-if="isLoading" class="poke" />
    <div
      class="poke"
      v-else
      :style="`background: url(${pokemon.sprite}) no-repeat center;`"
    >
      {{ pokemon.name }}
    </div>
  </div>
</template>

<script>
import { common } from "../api";

export default {
  props: ["url"],
  data() {
    return {
      pokemon: {},
      isLoading: false
    };
  },
  created() {
    this.isLoading = true;
    common
      .fetchData(this.url)
      .then(data => {
        this.pokemon = data;
      })
      .finally(_ => {
        setTimeout(_ => {
          this.isLoading = false;
        }, 1200);
      });
  }
};
</script>

<style>
.poke {
  height: 100px;
  width: 100px;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}
</style>
