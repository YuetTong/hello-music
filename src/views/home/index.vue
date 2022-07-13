<template>
  <div class="home">
    <Swiper />
    <PersonMusic />
  </div>
</template>
<script setup lang="ts" scoped>
import "./index.scss";
import { ref, reactive } from "vue";
import Swiper from "./components/Swiper/index.vue";
import PersonMusic from "./components/PersonMusic/index.vue";
import "swiper/css";
</script>
<style></style>
