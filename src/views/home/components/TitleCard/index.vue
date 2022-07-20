<template>
  <div class="personalized">
    <div class="title">
      <p>{{ state.title }}</p>
      <div class="arrow-right"></div>
    </div>
    <div class="container">
      <div class="list-item" v-for="(item, index) in state.list" :key="index">
        <img class="list-img" :src="item.picUrl" />
        <div class="info">
          <div class="num">{{ index }}</div>
          <div class="musicInfo">
            <div class="title">{{ item.somgName }}</div>
            <div class="name">{{ item.artist }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" scoped>
import { log } from "console";
import { ref, reactive } from "vue";
const props = defineProps({
  title: String,
  list: {
    type: Array,
    default: () => [],
  },
});

function adjustSongList(data) {
  return data.map((item) => {
    const newData = {
      songName: item.song.album.name,
      artist: item.song.album.company,
      picUrl: item.picUrl,
    };
    return newData;
  });
}

let state = reactive({ title: props.title, list: adjustSongList(props.list) });
</script>
<style scoped lang="scss" src="./index.scss">
</style>