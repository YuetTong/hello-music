<template>
  <el-table
    :data="state.dailySongs"
    stripe
    style="width: 100%"
  >
    <el-table-column
      prop="order"
      width="80"
    />
    <el-table-column
      label=""
      width="180"
    >
      <template #default="{row}">
        <!-- :class="['common-modal-title', `common-modal-title-${titleClass}`] -->
        <div class="operation">
          <!-- <div :class=" row.isLike ? 'like':'unlike' " /> -->
          <div
            :class="['unlike', row.isLike ? 'like':'']"
          />
          <div class="download" />
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="音乐标题"
      width="180"
    />
    <el-table-column
      prop="artist"
      label="歌手"
      width="180"
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

init();
</script>
<style scoped lang='scss' src='./index.scss' />
