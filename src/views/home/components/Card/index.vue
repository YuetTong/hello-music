<template>
  <div class="personalized">
    <div class="title">
      <div>{{ state.title }}</div>
      <div class="arrow-right" />
    </div>
    <div class="container">
      <div
        v-for="(item, index) in state.list"
        :key="index"
        class="list-item"
      >
        <div class="fiximg">
          <img
            v-lazy="item.picUrl"
            class="list-img"
          >
        </div>
        <div
          v-if="state.showCount"
          class="count"
        >
          <div class="playbtn" />
          <div>{{ toTenThousand(item.playCount) }}</div>
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
  showCount: {
    type: Boolean,
    default: false,
  },
});

let state: any = reactive({ title: props.title, list: props.list, showCount:props.showCount });
</script>
<style scoped lang='scss' src='./index.scss'>
</style>
