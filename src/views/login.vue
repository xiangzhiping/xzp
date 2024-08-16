<template>
  <div class="el-card" :style="{boxShadow: `var(--el-box-shadow-lighter)` }">
    <div class="card_head">
      <p @click="currentTab = 'tab1'" :class="{ active: currentTab === 'tab1' }">账号密码登录</p>
      <p @click="currentTab = 'tab2'" :class="{ active: currentTab === 'tab2' }">验证码登录</p>
    </div>
    <div v-if="currentTab === 'tab1'" class="card_tab">
      <account_password_login></account_password_login>
    </div>
    <div v-if="currentTab === 'tab2'" class="card_tab">
      <captcha_login></captcha_login>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import Account_password_login from "@/components/login/account_password_login.vue";
import Captcha_login from "@/components/login/captcha_login.vue";

const currentTab = ref('tab1');
</script>

<style scoped>
.el-card {
  width: 400px;
  height: 350px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #909399;
  font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

.card_head {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card_tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
}

p {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 30px;
  font-weight: bold;
  font-size: 17px;
}

p.active {
  color: #409EFF;
  font-weight: bold;
}
</style>
