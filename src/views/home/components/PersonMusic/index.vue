<template>
  <div class="personalized">
    <div class="title">
      <p>推荐歌单</p>
      <div class="arrow-right"></div>
    </div>
    <div class="container"></div>
  </div>
</template>
<script setup lang="ts" scoped>
import "./index.scss";
import { ref, reactive } from "vue";
import { getPersonalized } from "../../../../network/request";

let state = reactive({ banners: [] });
getPersonalized();
// async function init() {
//   state.banners = await getBanner();
//   console.log("banners", state.banners);
// }

// const onSwiper = (swiper) => {
//   console.log(swiper);
// };
// const onSlideChange = () => {
//   console.log("slide change");
// };

// init();
</script>
<style></style>
