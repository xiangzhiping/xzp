<template>
  <div class="login_body">
    <el-form :model="loginForm" :rules="rules" ref="formRef">
      <el-form-item prop="account" class="item_form">
        <div class="login_ele">
          <el-input v-model="loginForm.account" placeholder="请输入账号名（电话 \ 邮箱）" class="full-width" clearable>
            <template #prepend>
              <el-button :icon="User"/>
            </template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item prop="password" class="item_form">
        <div class="login_ele">
          <el-input v-model="loginForm.password" placeholder="请输入密码" class="full-width" clearable>
            <template #prepend>
              <el-button :icon="Key"/>
            </template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item prop="captcha" class="item_form_captcha">
        <div class="login_ele">
          <el-input v-model="loginForm.captcha" placeholder="请输入图片验证码" class="full-width login_captcha"
                    clearable>
            <template #prepend>
              <el-button :icon="Message"/>
            </template>
          </el-input>
          <div class="image_captcha" @click="imageCaptchaGetHandel">
            <el-image :src="imageCaptchaUrl" fit="cover">
              <template #error>
                <el-icon size="20">
                  <Picture/>
                </el-icon>
              </template>
            </el-image>
          </div>
        </div>
      </el-form-item>
      <div class="login_ele">
        <el-button type="primary" class="login_button" @click="userAccountPasswordLoginHandel">登 录</el-button>
      </div>
    </el-form>
  </div>
</template>
<script setup>
import {ref, reactive} from 'vue'
import {User, Key, Message, Picture} from '@element-plus/icons-vue'
import router from "@/router";
import {imageCaptchaIdGet, imageCaptchaImageGet, userAccountPasswordLogin} from '@/apis/login';

const imageCaptchaUrl = ref('')
const imageCaptchaGetHandel = async () => {
  const captchaId = (await imageCaptchaIdGet()).data
  const image = await imageCaptchaImageGet(captchaId)
  imageCaptchaUrl.value = URL.createObjectURL(image);
  loginForm.captcha_id = captchaId;
}
imageCaptchaGetHandel()

const formRef = ref(null)
const loginForm = reactive({
  account: null,
  password: null,
  captcha_id: null,
  captcha: null
})


const userAccountPasswordLoginHandel = async () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      const res = await userAccountPasswordLogin(loginForm)
      console.log(res)
      if (res.code === 200) {
        await router.push('/')
        localStorage.setItem("Authorization", res.data)
      }
    } else {
      console.log(valid);
      return valid
    }
  })
}

const rules = reactive({
  account: [
    {required: true, message: '请输入账号名', trigger: 'blur'},
    {validator: accountValidator, trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
  ],
  captcha: [
    {required: true, message: '请输入图片验证码', trigger: 'blur'},
  ],
})

function accountValidator(rule, value, callback) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^1[3-9]\d{9}$/;
  if (emailRegex.test(value) || phoneRegex.test(value)) {
    return callback();
  } else {
    return callback('请输入有效的手机号或邮箱');
  }
}
</script>
<style scoped>
.login_ele {
  width: 330px;
  height: 40px;
  display: flex;
  justify-content: space-between;
}

.login_body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.image_captcha {
  width: 100px;
  height: 40px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  justify-items: center;
  border-radius: 2px;
  cursor: pointer;
}

.el-icon {
  margin-top: 10px;
  color: deepskyblue;
}

::v-deep .el-image__inner {
  border-radius: 2px;
  cursor: pointer;
}


.login_captcha {
  width: 220px;
}

.login_button {
  width: 100%;
  height: 40px;
}

.item_form .el-input-group--prepend {
  height: 40px;
  width: 330px;
}

.item_form_captcha .el-input-group--prepend {
  height: 40px;
  width: 220px;
  display: flex;
}

::v-deep .el-form-item__error {
  width: 100%;
  display: flex;
  margin-left: 45px;
}
</style>
