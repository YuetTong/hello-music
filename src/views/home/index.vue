<template>
  <div class="home">
    <Swiper />
    <Card
      class="card"
      v-if="showPersonalized"
      :title="state.personlized.title"
      :list="state.personlized.personlizedList"
    />
    <Card
      class="card"
      v-if="showPrivate"
      :title="state.privateContent.title"
      :list="state.privateContent.privateContentList"
    />
    <TitleCard />
  </div>
</template>
<script setup lang="ts" scoped>
import "./index.scss";
import { ref, reactive, computed } from "vue";
import Swiper from "./components/Swiper/index.vue";
import Card from "./components/Card/index.vue";
import TitleCard from "./components/TitleCard/index.vue";
import "swiper/css";
import { getPrivateContent, getPersonalized, getDjprogramt } from "../../network/request";
import { log } from "console";

let state = reactive({
  privateContent: { privateContentList: [], title: "" },
  personlized: { personlizedList: [], title: "推荐歌单" },
  recommend: [],
});

async function getPrivate() {
  let data = await getPrivateContent();
  state.privateContent.privateContentList = data.result;
  state.privateContent.title = data.name;
}

async function getPerson() {
  let data = await getPersonalized();
  state.personlized.personlizedList = data.result;
}

async function getDj() {
  let data = await getDjprogramt();
  state.recommend = data.djRadios;
}

const showPersonalized: Boolean =
  computed(
    () => state.personlized.personlizedList.length > 0 && state.personlized.title
  ) || false;

const showPrivate: Boolean =
  computed(
    () => state.privateContent.privateContentList.length > 0 && state.privateContent.title
  ) || false;

const showRecommend: Boolean = computed(() => state.recommend.length > 0) || false;

// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }

async function init() {
  getPerson();
  getPrivate();
}

init();
getDjprogramt();
</script>
<style></style>
