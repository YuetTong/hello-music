<template>
  <div class="personalized">
    <div class="title">
      <p>{{ state.title }}</p>
      <div class="arrow-right"></div>
    </div>
    <div class="container">
      <div class="list-item" v-for="(item, index) in state.list" :key="index">
        <img class="list-img" :src="item.picUrl" />
        <p class="txt">{{ item.name }}</p>
        <!-- <div class="txt">{{ item.name }}</div> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" scoped>
import { ref, reactive } from "vue";
const props = defineProps({
  title: String,
  notBack: Boolean,
  list: {
    type: Array,
    default: () => [],
  },
});

let state = reactive({ title: props.title, list: props.list });
</script>
<style scoped lang="scss" src="./index.scss">
</style>
