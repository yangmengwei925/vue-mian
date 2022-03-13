/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-empty */
/* eslint-disable no-empty */
/* eslint-disable vue/no-spaces-around-equal-signs-in-attribute */
<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">欢迎登录</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <!-- 账号 -->
        <el-input
          id="username"
          ref="username"
          v-model="loginForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            id="password"
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;background:#e72528" @click.native.prevent="handleLogin">登录</el-button>

      <div style="position:relative">
        <div class="tips" style="display:flex;color:black">
          <!-- 记住密码 -->
          <input v-model="loginForm.remember" type="checkbox"> <label style="margin:0 10px;">记住密码</label>
          <!-- <span>Username : admin</span>
          <span>Password : any</span> -->
        </div>
        <div class="tips" style="color:black">
          <!-- <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span> -->
          <div style="font-size:14px"><b style="color:#e72528">>></b><strong style="color:aliceblue">为了保证您的账号安全,请安装根证书！如已安装,请忽略!</strong><a href="/nginxService/v1/download/InstallRootCert.exe" style="color:red;text-decoration:underline">下载</a></div>
        </div>

        <!-- <el-button class="thirdparty-button" type="primary" @click="showDialog=true">
          Or connect with
        </el-button> -->
      </div>
    </el-form>

    <el-dialog title="Or connect with" :visible.sync="showDialog">
      <!-- Can not be simulated on local, so please combine you own business simulation! ! !
      <br>
      <br>
      <br> -->
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import SocialSign from './components/SocialSignin'
// 引入base64
// eslint-disable-next-line no-unused-vars
const Base64 = require('js-base64').Base64
export default {
  name: 'Login',
  components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: 'hik12345+',
        remember: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
    // 在页面加载时从cookie获取登录信息
    // eslint-disable-next-line no-unused-vars
    // const username = this.getCookie('username')
    // // eslint-disable-next-line no-unused-vars
    // const password = Base64.decode(this.getCookie('password'))
    // if (username) {
    //   this.loginForm.username = username
    //   this.loginForm.password = password
    //   this.loginForm.remember = true
    // }
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 登录
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              // 存储token（需要封装拦截器，将token放在请求投中)
              // this.setCookie('token')
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
              // 存储登录信息
              // this.setUserInfo()
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 储存表单信息
    // setUserInfo: function() {
    //   // 判断用户是否勾选记住密码,如果勾选，向cookie中存储登录信息，
    //   // 如果没有勾选，储存信息为空
    //   if (this.loginForm.remember) {
    //     this.setCookie('username', this.loginForm.username)
    //     // Base64加密密码
    //     const password = Base64.encode(this.loginForm.password)
    //     this.setCookie('remember', password)
    //   } else {
    //     this.setCookie('username', '')
    //     this.setCookie('password', '')
    //   }
    // },
    // 获取cookie
    // getCookie: function(key) {
    //   if (document.cookie.length > 0) {
    //     var start = document.cookie.indexOf(key + '=')
    //     if (start !== -1) {
    //       start = start + key.length + 1
    //       var end = document.cookie.indexOf(';', start)
    //       if (end === -1) end = document.cookie.length
    //       return unescape(document.cookie.substring(start, end))
    //     }
    //   }
    //   return ''
    // },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 360px;
    max-width: 100%;
    padding: 90px 35px 0;
    margin: 10% auto;
    overflow: hidden;
    background: rgb(146, 144, 144);
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
      color:#2d3a4b
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
