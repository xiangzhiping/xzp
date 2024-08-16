<script setup>
import {ref} from 'vue'
import { Picture as IconPicture } from '@element-plus/icons-vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
</script>

<template>
  <el-image>
    <template #error>
      <div class="image-slot">
        <el-icon><icon-picture /></el-icon>
      </div>
    </template>
  </el-image>
</template>

<style scoped>
.login_ele {
  width: 330px;
  height: 40px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.login_body {
  width: 100%;
  height: 100%;
  background: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login_ele .el-image {
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  border-radius: 3px;
}
.login_captcha{
  width: 220px;
}
.login_button {
  width: 100%;
  height: 40px
}
</style>
