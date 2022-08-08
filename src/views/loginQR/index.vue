<template>
  <div class="login-page">
    key:  {{ keyQR&&keyQR }}
  </div>
</template>

<script setup lang="ts">
// import { reactive } from "vue";
import { ref } from "vue";

import { getQRKey } from "../../network/request";

const keyQR= ref(''); //切割类型

async function getKey () {
  let data = await getQRKey();
  keyQR.value = data;
}

async function init() {
  getKey();
}

init();
</script>

<style scoped lang="scss">
.login-page {
  margin: auto;
  width: 300px;
}
</style>
