<template>
  <div class="home" />
</template>
<script setup lang='ts' scoped>
// import { reactive, computed } from 'vue';

import {
getRecommendsong
} from '../../network/request';

// let state = reactive({
//   privateContent: { privateContentList: [], title: '' },
//   personlized: { personlizedList: [], title: '推荐歌单' },
//   recommend: { recommendList: [], title: '独家放送2.0' },
//   newSong: { songList: [], title: '最新音乐' },
// });

async function getRecSong() {
  let data = await getRecommendsong();
  console.log('~~~~~~~~~~~~~~~~');
  console.log(data);
  // state.privateContent.privateContentList = data?.result || [];
  // state.privateContent.title = data?.name;
}



async function init() {
  getRecSong();
}

init();
</script>
<style scoped lang='scss' src='./index.scss' />
