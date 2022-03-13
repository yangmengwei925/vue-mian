<template>
  <div class="sidebar-wrapper" :class="{'has-logo': true}">
    <div class="hamburger">
      <hamburger
        id="hamburger-container"
        :is-active="sidebar.opened"
        class="hamburger-container"
        @toggleClick="toggleSideBar"
      />
    </div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in sideBarRoutes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import Hamburger from '@/components/Hamburger'

export default {
  components: { SidebarItem, Hamburger },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // debugger
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    globalNavesRoutes() {
      return this.permission_routes.filter(item => !item.hidden)
    },
    sideBarRoutes() {
      let fatherPath = ''
      let grandFatherPath = ''
      let grandFatherAndFather = ''
      let subStringArr = []
      const fullPath = this.$route.path
      const indexArr = []
      for (let i = 0; i < fullPath.length; i++) {
        if (fullPath[i] === '/') {
          indexArr.push(i)
        }
      }
      grandFatherPath = fullPath.substring(0, indexArr[1] ? indexArr[1] : fullPath.length)
      if (indexArr[1] && indexArr[2]) {
        grandFatherAndFather = fullPath.substring(0, indexArr[2])
        subStringArr.push(indexArr[1] + 1, indexArr[2])
      } else if (indexArr[1] && !indexArr[2]) {
        grandFatherAndFather = fullPath.substring(0, indexArr[1])
        subStringArr.push(indexArr[1] + 1)
      } else if (!indexArr[1]) {
        grandFatherAndFather = fullPath
        subStringArr.push(1)
      }
      fatherPath = fullPath.substring(...subStringArr)
      const grandFatherPathArr = this.globalNavesRoutes.filter(item => item.path === grandFatherPath)
      const fatherPathArr = grandFatherPathArr[0].children.filter(item => item.path === fatherPath)
      return fatherPathArr[0].children.map(child => {
        return {
          ...child,
          path: grandFatherAndFather + '/' + child.path
        }
      })
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>

<style lang="scss">
.el-menu-item{
  padding: 0 16px 0 12px !important;
  height: 48px;
  line-height: 48px;
  &.is-active{
    background-color: #171717 !important;
    color: hsla(0,0%,100%,.9)!important;
  }
}
.el-submenu__title{
  padding: 0 16px 0 12px !important;
  height: 48px;
  line-height: 48px;
}
</style>
