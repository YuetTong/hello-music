<template>
  <div class="personalized">
    title card
    {{ state.list }}

    <!-- <div class="title">
      <p>{{ state.title }}</p>
      <div class="arrow-right"></div>
    </div>
    <div class="container">
      <div class="list-item" v-for="(item, index) in state.list" :key="index">
        <img class="list-img" :src="item.picUrl" />
        <p class="txt">{{ item.name }}</p>
      </div>
    </div> -->
  </div>
</template>
<script setup lang="ts" scoped>
import "./index.scss";
import { ref, reactive } from "vue";
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

let state = reactive({ list: props.list });
</script>
<style></style>
