<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <div>
        <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
      </div>
    </transition>
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'AppMain',
  components: {
    Breadcrumb
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
      console.log(this.$store.state.tagsView.cachedViews)
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
.app-main{
  height: 100%;
  width:100%;
  //  overflow-x:
    overflow-x: hidden;
}
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
