<template>
  <div class="personalized">
    <div class="title">
      <p>{{ state.title }}</p>
      <div class="arrow-right"></div>
    </div>
    <div class="container">
      <div class="list-item" v-for="(item, index) in state.list" :key="index">
        <img class="list-img" :src="item.picUrl" />
        <div class=""></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts" scoped>
import "./index.scss";
import { ref, reactive, defineProps } from "vue";
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
<style></style>
