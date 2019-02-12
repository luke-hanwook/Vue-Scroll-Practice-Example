<template>
  <div class="loading-image-wrapper"><LoadingSvg1 class="loading-image" /></div>
</template>

<script>
import LoadingSvg1 from "./svg/SvgLoading.vue";

export default {
  components: { LoadingSvg1 }
};
</script>

<style>
.loading-image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
