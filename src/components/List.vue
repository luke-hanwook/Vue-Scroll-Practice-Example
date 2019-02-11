<template>
  <div>
    <ul>
      <li v-for="(data, index) in list" :key="index">
        <Pokemon :url="data.url" />
      </li>
    </ul>
  </div>
</template>

<script>
import Pokemon from "./Pokemon";

export default {
  props: ["list"],
  components: { Pokemon }
};
</script>

<style scoped>
li {
  display: inline-block;
}
</style>
