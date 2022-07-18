<template>
  <div class="home">
    <Swiper />
    <Card
      v-if="state.personlized.personlizedList?.length > 0 && state.personlized.title"
      :title="state.personlized.title"
      :list="state.personlized.personlizedList"
    />
    <Card
      v-if="
        state.privateContent.privateContentList?.length > 0 && state.privateContent.title
      "
      :title="state.privateContent.title"
      :list="state.privateContent.privateContentList"
    />
  </div>
</template>
<script setup lang="ts" scoped>
import "./index.scss";
import { ref, reactive } from "vue";
import Swiper from "./components/Swiper/index.vue";
import Card from "./components/Card/index.vue";
import "swiper/css";
import { getPrivateContent, getPersonalized } from "../../network/request";
import { log } from "console";

let state = reactive({
  privateContent: { privateContentList: [], title: "" },
  personlized: { personlizedList: [], title: "推荐歌单" },
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

// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }

async function init() {
  getPerson();
  getPrivate();
}

init();
</script>
<style></style>
