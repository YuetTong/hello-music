<template>
  <!-- <input v-model="phoneNumber" placeholder="Phone Number" />
     <input v-model="pw" placeholder="Password" />
     <button @click="getLogin(phoneNumber, pw)">Login</button> -->

  <div class="login-page">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finish-failed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>
      <a-form-item
        label="Captcha"
        name="captcha"
        :rules="[{ message: 'Please input your captcha!' }]"
      >
        <a-input-password v-model:value="formState.captcha" />        
        <button
          style="float:right"
          @click="getCaptcha(formState.username)"
        >
          获取验证码
        </button>  
      </a-form-item>
      <a-form-item
        label="Password"
        name="password"
        :rules="[{ message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        name="remember"
        :wrapper-col="{ offset: 8, span: 16 }"
      >
        <a-checkbox v-model:checked="formState.remember">
          Remember me
        </a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button
          type="primary"
          html-type="submit"
        >
          Login
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { getLogin,getCaptcha } from "../../network/request";

interface IAccount {
  username: string;
  password: string;
  captcha: number;
  remember?: boolean;
}

const initAccount: IAccount = {
  username: "13802929226",
  password: "123456",
  captcha: null,
  remember: true,
};
const formState = reactive({ ...initAccount });

const onFinish = (values: any): void => {
  console.log("Success:", values);
  getLogin(values.username, values.password, values.captcha);
};

const onFinishFailed = (errorInfo: String): any => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped lang="scss">
.login-page {
  margin: auto;
  width: 300px;
}
</style>
