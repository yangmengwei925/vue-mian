<template>
  <div :class="classObj" class="app-wrapper">
    <div :class="{'fixed-header':fixedHeader}">
      <navbar @openDrawer="openDrawer"/>
    </div>
    <sidebar v-if="notIndexPage" class="sidebar-container" />
    <div :class="{hasTagsView: needTagsView, width100: !notIndexPage}" class="main-container">
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
    <!-- drawer -->
    <el-drawer
      title=""
      custom-class="globalNavDrawerClassName"
      :modal="false"
      :show-close="false"
      :visible.sync="drawer"
      direction="ltr"
      :before-close="handleClose">
      <div class="global-nav">
        <div class="title">全局导航</div>
        <div v-for="(item, index) in globalNavesRoutes" :key="index" class="group-info">
          <div class="name">
            {{ item.meta.title }}
          </div>
          <div v-for="(route, rIndex) in item.children" :key="rIndex" class="group-item" @click="handleToPage(item.path, route.path)">{{ route.meta.title }}</div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
 import path from 'path'
 import RightPanel from '@/components/RightPanel'
 import { AppMain, Navbar, Settings, Sidebar } from './components'
 import ResizeMixin from './mixin/ResizeHandler'
 import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    RightPanel,
    Settings,
    Sidebar
  },
  data() {
    return {
     drawer: false,
      notShowSideBarPage:[
        '/index',
        '/dashboard'
      ]
    }
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters([
      'permission_routes'
    ]),
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    //关闭访客预约 来访记录  异常访客记录  异常权限下载记录 访客权限组  待办事项  审批记录
     classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
     notIndexPage() {
      //  return this.$route.path !== '/index' && this.$route.path !== '/dashboard'
      return !this.notShowSideBarPage.includes(this.$route.path)
     },
     globalNavesRoutes() {
       console.log(this.permission_routes.filter(item => !item.hidden))
       return this.permission_routes.filter(item => !item.hidden)
     }
  },
  mounted() {
     const drawer = document.getElementsByClassName('globalNavDrawerClassName')[0]
     drawer.addEventListener('mouseleave', this.closeDrawer)
  },
  methods: {
    // handleClickOutside() {
    //   this.$store.dispatch('app/closeSideBar', { withoutAnimation: true })
    // },
    handleClose(done) {
      done()
    },
    openDrawer() {
      this.drawer = true
    },
    closeDrawer() {
      this.drawer = false
    },
    handleToPage(parentRoute, childRoute) {
      let route = ''
      if (parentRoute === '/' && childRoute) {
        route = parentRoute + childRoute
      } else if (parentRoute && parentRoute !== '/' && childRoute) {
        route = parentRoute === 'external-link' ? childRoute : parentRoute + '/' + childRoute
      } else {
        route = parentRoute
      }
      if (~route.indexOf('http')) {
        path.resolve(route)
        window.open(route)
        return
      }
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 48px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
  ::v-deep .globalNavDrawerClassName{
    box-sizing: border-box;
    width: 414px !important;
    height: calc(100% - 68px);
    top: 68px;
    background-color: #373737;
    overflow-y: scroll;
    .el-drawer__header{
      margin: 0;
      padding: 0;
      height: 0;
    }
    .global-nav{
      padding: 20px 0;
      .title{
        padding-left: 14px;
        line-height: 20px;
        color: #9b9b9b;
        overflow: hidden;
        word-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .group-info{
          margin: 12px 0 32px 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 0 0 0 10px;
          font-size: 0;
          .name {
            padding-left: 4px;
            font-size: 14px;
            margin-bottom: 6px;
            color: #9b9b9b;
          }
          .group-item{
            font-size: 14px;
            margin: 4px;
            width: 122px;
            height: 40px;
            padding: 0 8px;
            line-height: 40px;
            text-align: center;
            border-radius: 2px;
            display: inline-block;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: #e2e2e2;
            border: 1px solid #4b4b4b;
            background: #414141;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
            color: #e2e2e2!important;
            border: 1px solid #4b4b4b!important;
            background: #414141!important;
        }
      }
    }
  }
</style>
