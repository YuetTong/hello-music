<template>
  <div class="personalized">
    <div class="title">
      <p>{{ state.title }}</p>
      <div class="arrow-right" />
    </div>
    <div class="container">
      <div
        v-for="(item, index) in state.list"
        :key="index"
        class="list-item"
      >
        <img
          class="list-img"
          :src="item.picUrl"
        >
        <div class="count">
          <p>{{ toTenThousand(item.playCount) }}</p>
        </div>
        <div class="txt">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts' scoped>
import { reactive } from 'vue';
import {toTenThousand} from '@/utils/helper.js'
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  list: {
    type: Array,
    default: () => [],
  },
});

let state: any = reactive({ title: props.title, list: props.list });
</script>
<style scoped lang='scss' src='./index.scss'>
</style>
