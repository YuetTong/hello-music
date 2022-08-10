<template>
  <el-table
    :data="state.dailySongs"
    stripe
    style="width: 100%"
  >
    <el-table-column
      prop="order"
      min-width="80"
    />
    <el-table-column
      label=""
      min-width="180"
    >
      <template #default="{row}">
        <div class="operation">
          <div
            :class="['unlike', row.isLike ? 'like':'']" 
            @click="toogleLike(row)"
          />
          <div
            class="download"
            @click="download(row)"
          />
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="音乐标题"
      min-width="180"
    />
    <el-table-column
      prop="artist"
      label="歌手"
      min-width="180"
    />
    <el-table-column
      prop="album"
      label="专辑"
    />
  </el-table>
</template>
<script setup lang='ts' scoped>
import { reactive} from 'vue';

import {
getRecommendsong
} from '../../network/request';
import { modMusicList } from '../../utils/helper';

let state = reactive({
  dailySongs: [],
  orderSongs: [],
});

async function getRecSong() {
  let data = await getRecommendsong();
  const { dailySongs = [], orderSongs = [] } = data
  state.dailySongs = modMusicList(dailySongs);
  state.orderSongs = orderSongs;
}

async function init() {
  getRecSong();
}

function toogleLike(row) {
  row.isLike = !row.isLike
}

function download(row) {
  console.log('⬇️')
  console.log(row)  
}

init();
</script>
<style scoped lang='scss' src='./index.scss' />
