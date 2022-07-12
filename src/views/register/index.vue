<template>
  <!-- <h2>我是首页{{ msg }}</h2>
  <h2> {{ count }}</h2> -->
  <h1>NetEase Register</h1>
  <input v-model="phoneNumber" placeholder="Phone Number" />
  <button @click="getCaptcha(phoneNumber)">Captcha</button>
  <br>
  <input v-model="captcha" placeholder="Verification code" />
  <input v-model="pw" placeholder="Password" />
  <button @click="getRegister(phoneNumber, pw, captcha)">Register</button>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import {getUser, getPlaylist, getRegister, getCaptcha} from '../../network/request'

const phoneNumber = ref(18578663406);
const pw = ref(123456);
const captcha = ref(4413);


getUser()
getPlaylist()

</script>

 
<style scoped>
</style>