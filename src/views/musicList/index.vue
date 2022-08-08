<template>
  <div class="home" />
</template>
<script setup lang='ts' scoped>
import { reactive} from 'vue';

import {
getRecommendsong
} from '../../network/request';

let state = reactive({
  dailySongs: [],
  orderSongs: [],
});

async function getRecSong() {
  let data = await getRecommendsong();
  const {dailySongs=[], orderSongs=[]} = data
  state.dailySongs = dailySongs;
  state.orderSongs = orderSongs;
}



async function init() {
  getRecSong();
}

init();
</script>
<style scoped lang='scss' src='./index.scss' />
