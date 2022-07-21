<template>
  <div class="info-page">
    <Login />
    <h2>登录后调用此接口</h2>
    <!-- <div class="btn" @click="getUserInfo">登录后调用此接口 ,可获取用户账号信息</div>
    <h1 v-show="userId">user Id {{ userId }}</h1> -->
    <a-card title="可获取用户账号信息">
      <template #extra>
        <a @click="getUserInfo">获取账号信息</a>
      </template>
      <p v-show="userId">
        user id {{ userId }}
      </p>
    </a-card>
    <br>
    <a-card title="获取用户信息 , 歌单，收藏，mv, dj 数量">
      <template #extra>
        <a @click="getUserSub">获取用户信息</a>
      </template>
    </a-card>
    <br>
    <a-card
      title="可以获取用户等级信息,包含当前登录天数,听歌次数,下一等级需要的登录天数和听歌次数,当前等级进度,对应"
    >
      <template #extra>
        <a @click="getLevel">获取用户等级信</a>
      </template>
    </a-card>
    <br>
    <a-card title="传入用户 id, 可以获取用户歌单">
      <template #extra>
        <a @click="getUserUpdate">获取用户歌单</a>
      </template>
      <input
        v-model="updateData.gender"
        placeholder="edit me"
      ><br>
      <input
        v-model="updateData.signature"
        placeholder="edit me"
      > <br>
      <input
        v-model="updateData.city"
        placeholder="edit me"
      > <br>
      <input
        v-model="updateData.nickname"
        placeholder="edit me"
      > <br>
      <input
        v-model="updateData.birthday"
        placeholder="edit me"
      > <br>
      <input
        v-model="updateData.province"
        placeholder="edit me"
      > <br>
    </a-card>
    <br>
    <a-card title="传入用户 id, 可以获取用户歌单">
      <template #extra>
        <a @click="getPlaylist">获取用户歌单</a>
      </template>
      <input
        v-model="userId"
        placeholder="edit me"
      ><br>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import "./index.scss";
import { ref, reactive } from "vue";
import Login from "../login/index.vue";

import { getUserAcct, getUpdate, getUserPlaylist } from "../../network/request";

interface IUserData {
  gender: number;
  signature: string;
  city: number;
  nickname: string;
  birthday: number;
  province: number;
}

const userId = ref("7935782775");
const updateData: IUserData = reactive({
  gender: 0,
  signature: "测试签名",
  city: 440300,
  nickname: "binary",
  birthday: 1525918298004,
  province: 440000,
});

async function getUserInfo() {
  userId.value = await getUserAcct();
}

async function getUserSub() {
  //   userId.value = await getUserSubCount();
}

async function getLevel() {
  //   userLevel.value = await getUserLevel();
}

async function getUserUpdate() {
  getUpdate({ ...updateData });
}

async function getPlaylist() {
  getUserPlaylist(userId.value);
}
</script>
