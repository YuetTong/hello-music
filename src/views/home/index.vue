<template>
  <div class="home">
    <Swiper />
    <Card
      v-if="showPersonalized"
      class="first-section"
      :title="state.personlized.title"
      :list="state.personlized.personlizedList"
    />
    <!-- 独家放送 接口返回name -->
    <Card
      v-if="showPrivate"
      :title="state.privateContent.title"
      :list="state.privateContent.privateContentList"
    />
    <!-- 独家放送 接口返回数据近似 -->
    <WideCard
      v-if="showRecommend"
      :title="state.recommend.title"
      :list="state.recommend.recommendList"
    />
    <!-- 最新音乐 -->
    <TitleCard
      v-if="showSong"
      :title="state.newSong.title"
      :list="state.newSong.songList"
    />
  </div>
</template>
<script setup lang="ts" scoped>
import "./index.scss";
import { reactive, computed } from "vue";
import Swiper from "./components/Swiper/index.vue";
import Card from "./components/Card/index.vue";
import TitleCard from "./components/TitleCard/index.vue";
import WideCard from "./components/WideCard/index.vue";

import "swiper/css";
import {
  getPrivateContent,
  getPersonalized,
  getDjprogramt,
  getNewsong,
} from "../../network/request";

let state = reactive({
  privateContent: { privateContentList: [], title: "" },
  personlized: { personlizedList: [], title: "推荐歌单" },
  recommend: { recommendList: [], title: "独家放送2.0" },
  newSong: { songList: [], title: "最新音乐" },
});

async function getPrivate() {
  let data = await getPrivateContent();
  state.privateContent.privateContentList = data?.result || [];
  state.privateContent.title = data?.name;
}

async function getPerson() {
  let data = await getPersonalized();
  state.personlized.personlizedList = data?.result || [];
}

async function getDj() {
  let data = await getDjprogramt();
  state.recommend.recommendList = data?.djRadios || [];
}

async function getSong() {
  let data = await getNewsong();
  state.newSong.songList = data?.result || [];
}
const showPersonalized: Boolean =
  computed(
    () =>
      state.personlized.personlizedList.length > 0 && state.personlized.title
  ) || false;

const showPrivate: Boolean =
  computed(
    () =>
      state.privateContent.privateContentList.length > 0 &&
      state.privateContent.title
  ) || false;

const showRecommend: Boolean =
  computed(() => state.recommend.recommendList.length > 0) || false;

const showSong: Boolean =
  computed(() => state.newSong.songList.length > 0) || false;

// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }

async function init() {
  getPerson();
  getPrivate();
  getDj();
  getSong();
}

init();
</script>
<style></style>
