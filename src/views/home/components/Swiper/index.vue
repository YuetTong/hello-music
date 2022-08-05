<template>
  <div class="swiper">
    <swiper
      :slides-per-view="3"
      :space-between="50"
      class="swiper"
      :pagination="{ clickable: true }"
      :autoplay="{ autoplay: true }"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <swiper-slide
        v-for="(slideContent, index) in state.banners"
        :key="index"
      >
        <!-- <div class="fiximg">
          <img v-lazy="slideContent.imageUrl">
        </div> -->
        <img :src="slideContent.imageUrl">
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts" scoped>
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { getBanner } from "@/network/request.ts";
// import "swiper/less";
import "swiper/css/effect-cards";

// const modules: Array<any> = [EffectCards];

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const state = reactive({ banners: [] });

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
// // 自定义样式
// .swiper {
//   // 需要设置下长宽
//   width: 300px;
//   height: 450px;
// }

// .swiper-slide {
//   // 这个随意吧，自己看着设置
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 18px;
// }
/* 轮播图区域样式 */
.outer {
  width: 100%;
  height: 285px;
  background-image: url(../img/首页图库/background-image2.jpg);
}

.swiper-inner {
  position: relative;
  width: 984px;
  height: 285px;
  margin: 0 auto;
}

.swiper {
  width: 100%;
  height: 285px;
  overflow: hidden;
}

.swiper-wrapper > div > img {
  width: 730px;
  height: 285px;
}

.prev {
  position: absolute;
  left: -68px;
  top: 50%;
  display: block;
  width: 37px;
  height: 63px;
  background-image: url(../img/首页图库/首页轮播图.png);
  background-position: 0 -360px;
}

.prev:hover {
  background-image: url(../img/首页图库/首页轮播图.png);
  background-position: 0 -430px;
}

.next {
  display: block;
  position: absolute;
  top: 50%;
  margin-top: -31px;
  width: 37px;
  height: 63px;
  right: -68px;
  background-image: url(../img/首页图库/首页轮播图.png);
  background-position: 0 -508px;
}
.next:hover {
  background-image: url(../img/首页图库/首页轮播图.png);
  background-position: 0 -578px;
}

.download-app {
  position: absolute;
  top: 0;
  left: 730px;
  width: 254px;
  height: 285px;
  background-image: url(../img/首页图库/download.png);
  z-index: 20;
  border-left: 1px solid #292725;
  border-right: 1px solid #292725;
}

.download-app > #btn {
  display: inline-block;
  width: 215px;
  height: 56px;
  margin: 186px 0 0 19px;
}

.download-app > #btn:hover {
  background-image: url(../img/首页图库/download.png);
  background-position: 0 -290px;
}

.download-app p {
  margin: 10px 0px;
  color: #8d8d8d;
  text-align: center;
  font-size: 12px;
}
</style>
