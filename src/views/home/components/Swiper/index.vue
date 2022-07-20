<template>
  <div class="swiper">
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="swiper"
    >
      <swiper-slide v-for="(slideContent, index) in state.banners" :key="index">
        <img :src="slideContent.imageUrl" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts" scoped>
import { ref, reactive } from "vue";
import { getBanner } from "../../../../network/request";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

let state = reactive({ banners: [] });

async function init() {
  state.banners = await getBanner();
  console.log("banners", state.banners);
}

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};

init();
</script>
<style scoped lang="scss" src="./index.scss">
</style>
