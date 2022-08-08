<template>
  <div class="login-page">
    <el-button @click="getKey">
      get unique key
    </el-button>
    {{ keyQR&&keyQR }}
    <div>
      <el-button @click="getBase64()">
        get Base 64
      </el-button>
      {{ Base64Code&&Base64Code }}
      <img
        :src="Base64Code"
        alt=""
      >
    </div>
    <div>
      <el-button @click="getLoginStatus()">
        getLoginStatus
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { reactive } from "vue";
import { ref } from "vue";

import { getQRKey,getCreateQR,getLoginStatus } from "../../network/request";

const keyQR = ref(''); 
const Base64Code= ref(''); 


async function getKey () {
  let data = await getQRKey();
  keyQR.value = data;
}

async function getBase64 () {
  let data = await getCreateQR(keyQR.value);
  Base64Code.value = data
}

// async function init() {
//   getKey();
// }

// init();
</script>

<style scoped lang="scss">
.login-page {
  margin: auto;
  // width: 300px;
}
</style>
