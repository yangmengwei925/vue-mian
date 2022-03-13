/* eslint-disable vue/no-unused-components */
<template>
  <div class="navbar">
    <div class="nav-bar-logo">
      <img class="logo" src="../../assets/images/logo.png" alt="">
      <span class="system-name">综合安防管理平台</span>
      <div class="right-menu">
        <template v-if="device !== 'mobile'">
          <error-log class="errLog-container right-menu-item hover-effect" />
          <!-- <screenfull id="screenfull" class="right-menu-item hover-effect" /> -->
          <el-tooltip content="Global Size" effect="dark" placement="bottom">
            <!-- <size-select id="size-select" class="right-menu-item hover-effect" /> -->
            <!-- 下载图标 -->
            <el-button
              icon="el-icon-download"
              style="
                color: antiquewhite;
                height: 32px;
              "
              type="text"
              class="download"
            />
          </el-tooltip>
          <!-- //图标按钮 -->
          <div class="messdiv">
            <el-tooltip
              content="管理系统"
              effect="dark"
              placement="bottom"
              style="color: antiquewhite"
            >
              <el-button>管理系统</el-button>
              <!-- <size-select id="size-select" class="right-menu-item hover-effect" /> -->
              <el-button
                icon="el-icon-s-operation"
                type="text"
                style="
                  color: antiquewhite;
                "
              />
            </el-tooltip>
            <div class="selecshow">
              <p>系统管理</p>
              <p>关于</p>
              <p>帮助管理</p>
            </div>
          </div>
        </template>

        <el-dropdown
          class="avatar-container right-menu-item hover-effect"
          trigger="click"
        >
          <div class="avatar-wrapper">
            <!-- <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar"> -->
            <el-button
              icon="el-icon-user"
              type="text"
              style="color: antiquewhite"
            />
            <i
              class="el-icon-caret-bottom"
            />
          </div>
          <el-dropdown-menu slot="dropdown" style="width: 150px">
            <!-- <router-link to="/profile/index">
              <el-dropdown-item>Profile</el-dropdown-item>
            </router-link> -->
            <!-- <router-link to="/">
              <el-dropdown-item>Dashboard</el-dropdown-item>
            </router-link> -->
            <!-- 修改密码 -->
            <a target="_blank" href="">
              <el-dropdown-item
                style="
                  margin-left: 14px;
                  line-height: 50px;
                  font-size: 16px;
                  color: black;
                "
              >修改密码</el-dropdown-item>
            </a>
            <a
              target="_blank"
              href="https://panjiachen.github.io/vue-element-admin-site/#/"
            >
              <!-- 记忆标签 -->
              <!-- <el-dropdown-item>Docs</el-dropdown-item> -->
              <span style="margin-left: 25px">记忆标签</span>
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949"
              />
            </a>
            <el-dropdown-item divided @click.native="logout">
              <span
                style="
                  display: block;
                  margin-left: 30px;
                  font-size: 16px;
                  color: black;
                "
              >退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="nav-bar-tags">
      <i style="font-size: 20px;line-height: 34px;padding: 0 15px;color: #fff;cursor: pointer;" class="el-icon-menu" @mouseover="globalNavMenu"/>
      <tags-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Search from '@/components/HeaderSearch'
import TagsView from '@/layout/components/TagsView'
import ErrorLog from '@/components/ErrorLog'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // eslint-disable-next-line vue/no-unused-components
    // eslint-disable-next-line vue/no-unused-components
    ErrorLog,
    TagsView
  },
  data() {
    return {
      value: true
    }
  },
  computed: {
    ...mapGetters(['avatar', 'device'])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    globalNavMenu() {
      this.$emit('openDrawer')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  // position: fixed;
  // left: 0;
  // top: 0;
  height: 68px;
  overflow: hidden;
  background-color: #333 !important;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 99;
  .nav-bar-logo{
    margin-bottom: 2px;
    height: 32px;
    .logo{
      float: left;
      width: 32px;
      height: 32px;
    }
    .system-name{
      float: left;
      margin-left: 4px;
      color: #fff;
      font-size: 16px;
      line-height: 32px;
      vertical-align: middle;
      white-space: pre;
    }
  }
  .nav-bar-tags{
    display: flex;
  }
  .hamburger-container {
    line-height: 32px;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .messdiv {
    position: relative;
    height: auto;
    font-size: 14px;
  }
  .selecshow {
    display: none;
    position: absolute;
    border: 1px solid #ccc;
    box-shadow: 0px 8px 16px 0px #666;
    padding: 10px;
    min-width: 140px;
    line-height: 30px;
  }
  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    display: flex;
    width: 100px;
    justify-content: space-between;
    float: right;
    height: 100%;
    line-height: 32px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
    .right-menu:hover .download {
      display: block;
    }
    .avatar-container {
      margin-right: 10px;
      .avatar-wrapper {
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
